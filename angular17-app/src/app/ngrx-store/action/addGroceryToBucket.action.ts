import { createAction, props } from '@ngrx/store';
import { Bucket } from '../../shared/model/bucket';

export const addGroceryToBucket = createAction(
    '[Bucket] Add',
    props<{ payload: Bucket }>()
)