import { createReducer } from '@ngrx/store';
import { Grocery } from '../../shared/model/grocery';

const initialState: Grocery[] = [
    { id: 1, name: 'Milk', type: 'fruit' },
    { id: 2, name: 'Apple', type: 'fruit' },
    { id: 3, name: 'Banana', type: 'fruit' },
    { id: 4, name: 'Chips', type: 'snacks' },
]
export const groceryReducer = createReducer(initialState)