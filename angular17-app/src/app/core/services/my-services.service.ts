import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  http=inject(HttpClient);
  constructor() { }

  getUsers()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      tap((list)=>{
        debugger; //for getting whole data user tap operator so we can store it into variable & user it
      }),
      map((userList:any)=>userList.map((user:any)=>{
        return {id:user.id,name:user.name}
      }))
    )
  }
    getSingleUsers()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((userData:any)=>({address:userData.address,company:userData.company}))
    )
  }
}


