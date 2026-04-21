import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, computed, effect, ElementRef, Signal, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TempErrorComponent } from "../../../shared/temp-error/temp-error.component";
import {toSignal} from '@angular/core/rxjs-interop'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signal-in-depth',
  standalone: true,
  imports: [JsonPipe, FormsModule, TempErrorComponent],
  templateUrl: './signal-in-depth.component.html',
  styleUrl: './signal-in-depth.component.css'
})
export class SignalInDepthComponent implements AfterViewInit {

  course = signal('Angular');

  courseDuration = signal<string>("3 Months");

  cityList = signal<string[]>(['Pune', 'Mumbai', 'Thane', 'Solapur']);

  stateList: Signal<string[]> = signal<string[]>(['Maharashtra', 'Gujarat', 'Lucknow', 'UP', 'MP']);

  studObj = signal<any>({ name: 'ABC', city: 'Pune' });

  cityName: string = '';

  empObj = signal({ empId: 101, name: 'Pranav', city: 'Pune', pincode: 402002, })

  // empFullName=signal({
  //   fname:'',
  //   mName:'',
  //   lName:'',
  // })
  fName = signal('');
  mName = signal('');
  lName = signal('');
  fullName = computed(() => (this.fName() + ' ' + this.mName() + " " + this.lName()));

  showAlert = signal(true);
  cityNameViewChild = viewChild<ElementRef<HTMLInputElement>>('focusCity');

  
  constructor(private http:HttpClient) {
    console.log(this.course());
    effect(() => {
      console.log(this.fName());
    })
    // capture every signal value
    const userList=toSignal(http.get(''),{initialValue:[]});
    // convert observable to signal using toSignal
  }
  ngAfterViewInit() {
    this.cityNameViewChild()?.nativeElement.focus();
  }
  addCity() {
    if (!!this.cityName) {
      this.cityList.update(oldList => ([...oldList, this.cityName]));
      this.cityName = '';
    }
  }
  changeEmpId(event: any) {
    // console.log(event.target.value);
    let value = event.target.value;
    this.empObj.update(oldData => ({ ...oldData, empId: value }))
  }
  // instead of creating separate function for each value change crete common function for changing value

  changeFormValue(key: string, event: any) {
    let value = event.target.value;
    this.empObj.update(oldval => ({ ...oldval, [key]: value }))

  }
  updateFName(event: any) {
    this.fName.set(event.target.value);
    // console.log(event);
  }

  updateMName(event: any) {
    this.mName.set(event.target.value);
    // console.log(event);
  }
  updateLName(event: any) {
    this.lName.set(event.target.value);
    // console.log(event);
  }
}
