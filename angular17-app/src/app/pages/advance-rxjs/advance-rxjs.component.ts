import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { forkJoin, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-advance-rxjs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './advance-rxjs.component.html',
  styleUrl: './advance-rxjs.component.css'
})
export class AdvanceRxjsComponent implements OnInit {
  stateList$ = of(['Mp', 'UP', 'Mh']);
  cityList$ = of(['Indor', 'Lucknow', 'Pune']);
  http = inject(HttpClient);

  users$ = this.http.get("https://jsonplaceholder.typicode.com/users");
  posts$ = this.http.get("https://jsonplaceholder.typicode.com/posts");

  searchText = new FormControl();
  constructor() {
    // this.searchText.valueChanges.subscribe((str: string) => {
    //   this.http.get("https://dummyjson.com/products/search?q=" + str).subscribe((res) => {
    //     debugger;
    //   })
    // })
    this.searchText.valueChanges.pipe(
      switchMap((str:string)=>this.http.get("https://dummyjson.com/products/search?q=" + str))
    ).subscribe((res)=>{
      console.log(res);
    })
  }
  ngOnInit(): void {

    forkJoin([this.users$, this.posts$]).subscribe((data) => {
      // if one of api failed or observabal not getting it will failed
      // debugger;
    }, error => {
      // debugger;
    })
    forkJoin([this.stateList$, this.cityList$]).subscribe((res) => {
      // debugger;
    })
    this.stateList$.subscribe((res) => {
      // debugger;
    });
    this.cityList$.subscribe((res) => {
      debugger;
    })
  }

}
