import { createAction, props } from '@ngrx/store';
import { Bucket } from '../../shared/model/bucket';

export const addGroceryToBucket = createAction(
    '[Bucket] Add',
    props<{ payload: Bucket }>()
);
export const removeFromBucket = createAction(
    '[Bucket] Remove',
    props<{ payload: Partial<Bucket> }>()
)