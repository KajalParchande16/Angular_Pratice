import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Grocery } from '../../shared/model/grocery';


// export const getAllGrocery=createAction('[Grocery] Get All');
export const groceryActions=createActionGroup({
    source:'Grocery API',
    events:{
        'Load Groceries':emptyProps(),
        'Load Groceries Success':props<{payload:Grocery[]}>(),
        'Load Groceries Failure':emptyProps()
    }
});

