import { Component, computed, effect, Signal, signal } from '@angular/core';

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
  showHeading=false;
  r=signal(0);
  count:Signal<any>=computed(()=>{
    return this.p()+this.q();
  })

  constructor()
  {
    effect(()=>{
      // console.log("value of p",this.p());
      if(this.r()==2)
      {
        this.showHeading=true;
      }
      else{
        this.showHeading=false;
      }
    })
  }

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
    // this.r++;
    this.r.update((v)=>v+1);
    console.log(this.r());
    this.p.set(500);
    // this.showHeading.set(true);
  }


  // computed signal are just readable signal
  // effect can reading/reacting on signal value not updating signal value
}
