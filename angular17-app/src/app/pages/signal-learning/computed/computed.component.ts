import { Component, computed, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [],
  templateUrl: './computed.component.html',
  styleUrl: './computed.component.css'
})
export class ComputedComponent {
  x=20;
  y=10;
  z=this.x+this.y;
  p=signal(50);
  q=signal(20);
  // r=this.p()+this.q();
  count:Signal<any>=computed(()=>{
    return this.p()+this.q();
  })

  // in normal value update value not calculate so computed signal used
  showFinalValue()
  {
    console.log(this.z);
    this.x=100;
    console.log(this.z);
    console.log(this.count());
    this.p.set(200);

    console.log(this.count());

  }
  changeValue()
  {
    this.p.set(500);
  }
}
