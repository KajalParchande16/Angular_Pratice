import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  makeDeepCopy(data:any)
  {
    return JSON.parse(JSON.stringify(data))
  }
}
