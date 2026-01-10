import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  http=inject(HttpClient);
  constructor() { }

  getUsers()
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
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


