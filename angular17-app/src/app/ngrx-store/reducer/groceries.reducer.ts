import { createReducer } from '@ngrx/store';
import { Grocery } from '../../shared/model/grocery';

const intialState: Grocery[] = [
    { id: 1, name: 'Milk', type: 'fruit' },
    { id: 2, name: 'Apple', type: 'fruit' },
    { id: 3, name: 'Bannana', type: 'fruit' },
    { id: 4, name: 'Chips', type: 'snaks' },
]
export const groceryReducer = createReducer(intialState)