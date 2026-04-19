import { createReducer, on } from '@ngrx/store';
import { Grocery } from '../../shared/model/grocery';
import { GroceryService } from '../../shared/groceryService/grocery.service';
import { groceryActions } from '../action/grocery.action';

// const initialState: Grocery[] = [
//     { id: 1, name: 'Milk', type: 'fruit' },
//     { id: 2, name: 'Apple', type: 'fruit' },
//     { id: 3, name: 'Banana', type: 'fruit' },
//     { id: 4, name: 'Chips', type: 'snacks' },
// ]

// now call data from api
const initialState:Grocery[]=[];
export const groceryReducer = createReducer(initialState,
    on(groceryActions.loadGroceriesSuccess,(state,action)=>{
        return action.payload;
    })
)