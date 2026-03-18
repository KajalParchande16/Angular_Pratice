import {createReducer, on} from '@ngrx/store';
import {increment,decrement} from './counter.action'

export const intialValue=0;

export const counterReducer=createReducer(intialValue,
    on(increment,(state)=>state+1),
    on(decrement,(state)=>state-1)
);

export interface AppStore{
    count:number;
}
