import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../shared/model/bucket';
import { addGroceryToBucket } from '../action/addGroceryToBucket.action';

const initialState: Bucket[] = [];

export const bucketList = createReducer(initialState,
    on(addGroceryToBucket, (state, action) => {
        console.log(action);
        return [...state, action.payload]
    })
)