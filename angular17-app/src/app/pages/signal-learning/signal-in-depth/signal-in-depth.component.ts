import { JsonPipe } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-in-depth',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './signal-in-depth.component.html',
  styleUrl: './signal-in-depth.component.css'
})
export class SignalInDepthComponent {

  course = signal('Angular');

  courseDuration = signal<string>("3 Months");

  cityList = signal<string[]>(['Pune', 'Mumbai', 'Thane', 'Solapur']);

  stateList: Signal<string[]> = signal<string[]>(['Maharashtra', 'Gujarat', 'Lucknow', 'UP', 'MP']);

  studObj = signal<any>({ name: 'ABC', city: 'Pune' });

  cityName: string = '';

  empObj = signal({ empId: 101, name: 'Pranav', city: 'Pune', pincode: 402002, })

  constructor() {
    console.log(this.course());
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
}
