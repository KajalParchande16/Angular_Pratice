import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, shareReplay, tap } from 'rxjs';
import { User } from '../../User/user';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  http = inject(HttpClient);
  private api = 'https://api.freeapi.app/api/v1/todos';
  constructor() { }

  getAllProducts(): Observable<any> {
    return this.http.get("https://dummyjson.com/products/search?q=");
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api).pipe(
      map((user: any) => user.data),
      // map transforms the emitted data before it reaches the component.
      shareReplay(1)
    )
  }

  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.api, user).pipe(
      tap(() => console.log("User Added"))
    )
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.api}/${user._id}`, user,).pipe(
      tap(() => console.log("User Updated"))
    )
  }
  //   updateUser(user: User) {
  //   return this.http.put<ApiResponse<User>>(
  //     `${this.api}/${user._id}`,
  //     user,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //   ).pipe(
  //     tap(()=>console.log("User Updated")),
  //     map((res)=>res.data))

  // }


  deleteUser(userId: any) {
    return this.http.delete(`${this.api}/${userId}`).pipe(
      tap(() => console.log("User Deteted"))
    )
  }
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}