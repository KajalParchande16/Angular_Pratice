import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, shareReplay, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  http = inject(HttpClient);
  matchDuration = new BehaviorSubject<string>('4 Hours');
  roleSub$ = new Subject<string>();
  roleBehSub = new BehaviorSubject<string>('');

  // mapping data store previous call api respose caching data
  userDetails$ = new Map<number, Observable<any>>();

  constructor() { }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap((list) => {
        debugger; //for getting whole data user tap operator so we can store it into variable & user it
      }),
      map((userList: any) => userList.map((user: any) => {
        return { id: user.id, name: user.name }
      }))
    )
  }
  getSingleUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData: any) => ({ address: userData.address, company: userData.company }))
    )
  }

  // getUserById(id:number)
  // {
  //   return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  // }

  getUserById(id: number) :any |undefined {
    if (!this.userDetails$.has(id)) {


      const userData = this.http.get("https://jsonplaceholder.typicode.com/users/" + id).pipe(
        shareReplay(1)
      );
      this.userDetails$.set(id, userData);
    }
    return this.userDetails$.get(id);
  }
}


