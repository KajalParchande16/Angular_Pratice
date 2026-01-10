import { Component, inject } from '@angular/core';
import { filter, from, map, of } from 'rxjs';
import { MyServicesService } from '../../core/services/my-services.service';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent {
  numbers$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  rollList$ = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  mySer = inject(MyServicesService)

  constructor() {
    this.numbers$.pipe(
      filter(num => num % 2 == 0) // here we get single result so directly used rxjs filter opereator
    ).subscribe((res) => {
      console.log("one by data", res);
    });

    this.rollList$.pipe(
      map((result) => result.filter((val) => val % 2 == 0))
    ).subscribe((data) => {
      console.log("single result at a time", data);
    })

    this.mySer.getUsers().subscribe((res) => {
      console.log(res);
    })
    this.mySer.getSingleUsers().subscribe((res) => {
      console.log(res);
    })
  }

}
