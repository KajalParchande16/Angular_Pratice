import { Component } from '@angular/core';
import { GroceriesComponent } from '../groceries/groceries.component';
import { BucketComponent } from '../bucket/bucket.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Store } from '@ngrx/store';
import { groceryActions } from '../../ngrx-store/action/grocery.action';
import { Grocery } from '../../shared/model/grocery';

@Component({
  selector: 'app-ngrx-learning',
  standalone: true,
  imports: [GroceriesComponent,BucketComponent],
  templateUrl: './ngrx-learning.component.html',
  styleUrl: './ngrx-learning.component.css'
})
export class NgrxLearningComponent {
  constructor(private store:Store<{ groceries: Grocery[] }>)
  {
    this.store.dispatch(groceryActions.loadGroceries())
  }

}
