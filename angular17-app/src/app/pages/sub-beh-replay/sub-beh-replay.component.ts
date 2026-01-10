import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

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
  constructor() {
    setTimeout(() => {

      this.userName$.next("Rishika");
      this.userId$.next(23);
      this.takeTill.next()
    }, 2000);
  }

  ngOnInit(): void {
    this.userName$.subscribe((res) => {
      console.log(res);
    });
    this.userId$.subscribe((res) => {
      console.log(res);
    });
    this.takeTill.subscribe((res) => {
      console.log("not val", res)
    })
  }

}
