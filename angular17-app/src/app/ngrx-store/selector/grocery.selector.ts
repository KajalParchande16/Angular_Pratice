import { Grocery } from "../../shared/model/grocery";
import { createFeatureSelector, createSelector } from '@ngrx/store'


// export const grocerySelector=(state:{groceries:Grocery[]})=>state.groceries;

export const selectGrocery = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryByType = (type: string) => createSelector(selectGrocery,
    (state) => {
        return state.filter((e) => (e.type === type))
    }
)