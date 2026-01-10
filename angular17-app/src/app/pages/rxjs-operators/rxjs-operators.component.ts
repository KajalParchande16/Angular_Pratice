import { Component, inject } from '@angular/core';
import { filter, from, interval, map, of, take } from 'rxjs';
import { MyServicesService } from '../../core/services/my-services.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent {
  numbers$ = from([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  rollList$ = of([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  mySer = inject(MyServicesService);

  timeinterval=interval(1000);

  searchText=new FormControl();

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

    this.timeinterval.pipe(
      take(6),//how many time you have to subscribe 
    ).subscribe((res)=>{
      console.log(res);
    });
    // this.searchText.valueChanges.subscribe((res)=>{
    //   console.log(res)
    // });

    // call api after getting more than 3 letteers in serach box
    this.searchText.valueChanges.pipe(
      filter(res=>res.length >=3)
    ).subscribe((val)=>{
      console.log(val);
    })
  }

}
