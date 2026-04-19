import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../shared/groceryService/grocery.service';
import { groceryActions } from '../action/grocery.action';

@Injectable()
export class GroceryEffects {
  private actions$ = inject(Actions);
  private groceryService = inject(GroceryService);

  loadGroceries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(groceryActions.loadGroceries),
      exhaustMap(() =>
        this.groceryService.getAllGroceries().pipe(
          map((groceries:any) => (groceryActions.loadGroceriesSuccess({payload:groceries}))),
          catchError(() => EMPTY)
        )
      )
    );
  });
}