import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../shared/model/bucket';
import { addGroceryToBucket, removeFromBucket } from '../action/addGroceryToBucket.action';

const initialState: Bucket[] = [];

// initialState
// on=>which action has pass to reducer
// state will be=> {id: 1, name: 'Milk', quantity: 1}
// action  will be
// {
// {id: 1, name: 'Milk', quantity: 1}
// type: "[Bucket] Add"
// }


export const bucketList = createReducer(initialState,
    on(addGroceryToBucket, (state, action) => {
        // console.log(action);
        // but now we have to implement
        // 1. if grocery is already available in bucket the just increase quantity
        // 2. if not the add to bucket
        // 3. so adjust the quantity & action
        // debugger;
        const isGroceryAval = state.find((e) => e.id === action.payload.id)
        // console.log(isGroceryAval);
        if (isGroceryAval) {
            return state.map((item) => {
                return item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
            })

        }
        else {
            // console.log(...state)
            return [...state, action.payload]

        }

    }),
    on(removeFromBucket, (state, action) => {
        const existingItem = state.find((e) => e.id === action.payload.id);
        // console.log(existingItem && existingItem.quantity > 1);
        // her we check if grocery avl in bucket & quantity is greater than 1
        // if true then it will decrease quantity
        if (existingItem && existingItem.quantity > 1) {
            return state.map((item) => {
                return item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
            })
        }
        else {
            // if only 1 grocery grocery added &need to remove 
            // it will remove & show remaining grocery in  bucket
            return state.filter((item) => (item.id != action.payload.id))
        }
    })
)