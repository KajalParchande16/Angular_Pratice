import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [],
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.css'
})
export class BasicComponent {
  x = 20;
  count = signal(10);
  // data type of signal
  // data = signal<number|string>(16);
  data:WritableSignal<number |string> = signal<number|string>(16);

  updateData()
  {
    this.data.set('hello');
    // but when we use 2 data type update method will not work 
    // this.data.update((val)=>val+1)
  }

}
