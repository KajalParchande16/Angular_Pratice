import { Component, inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MyServicesService } from '../../core/services/my-services.service';

@Component({
  selector: 'app-sub-beh-replay',
  standalone: true,
  imports: [],
  templateUrl: './sub-beh-replay.component.html',
  styleUrl: './sub-beh-replay.component.css'
})
export class SubBehReplayComponent implements OnInit {

  userName$ = new Subject();
  userId$ = new Subject<number>();

  takeTill = new Subject<void>();

  // userData$=new Subject("Taniya"); not possible
  userData$: Subject<string> = new Subject<string>();

  ser=inject(MyServicesService);

  constructor() {
    setTimeout(() => {

      this.userName$.next("Rishika");
      this.userId$.next(23);
      this.takeTill.next()
    }, 2000);
  }

  ngOnInit(): void {
    this.ser.matchDuration.next("5 Hourse");

    this.userName$.subscribe((res) => {
      console.log(res);
    });
    this.userId$.subscribe((res) => {
      console.log(res);
    });
    this.takeTill.subscribe((res) => {
      console.log("not val", res)
    })

    this.ser.matchDuration.subscribe((res)=>{
      console.log(res);//getting intial value whic is stored in service 
      // if we update value anywhere from project (any compoent)we get new value
    })
    
  }

}
