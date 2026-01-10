import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rxjs-basic.component.html',
  styleUrl: './rxjs-basic.component.css'
})
export class RxjsBasicComponent implements OnInit {
cityList:string[]=['Pune','Mumbai','Solapur'];

cityList$=of(['Pune','Mumbai','Solapur']);
cityList2$=from(['Pune','Mumbai','Solapur']);

inter$=interval(1000);
time$=timer(3000);
  constructor() {

    
    const myObs$ = new Observable(value => {
      value.next("This is simple Observable");
      value.complete();
    });
    myObs$.subscribe((res) => {
      // debugger;
      console.log(res);

    })

    // for simple value we can user of operator

    of("This is coomon observable").subscribe((val)=>{
      console.log(val);
    })

    this.cityList$.subscribe((res)=>{
      // debugger;
      console.log("of operator",res);
    });

     this.cityList2$.subscribe((res)=>{
      // debugger;
      console.log("from operator",res); //getting one by one data
    });
    this.inter$.subscribe((val)=>{
      // console.log("interval",val);
    });
     this.time$.subscribe((val)=>{
      console.log("timer Executred",val);
    })
    
  }
  ngOnInit(): void {

  }

}
