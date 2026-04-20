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

  constructor() {
    console.log(this.course());
  }
  addCity() {
    if (!!this.cityName) {
      this.cityList.update(oldList => ([...oldList, this.cityName]));
      this.cityName = '';
    }
  }
}
