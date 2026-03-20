import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Store } from '@ngrx/store';
import { Grocery } from '../../shared/model/grocery';
import { Observable } from 'rxjs';
import { Bucket } from '../../shared/model/bucket';
import { addGroceryToBucket } from '../../ngrx-store/action/addGroceryToBucket.action';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule, NgSelectModule],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css'
})
export class GroceriesComponent {
  groceryList: any[] = [
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Paneer' },
    { id: 3, name: 'Shreekhand' }
  ]

  getAllGroceries$!: Observable<Grocery[]>;
  // created variable for store data
  constructor(private store: Store<{ groceries: Grocery[] }>) {
    // for store DI getting all griceries (passing reducer name mentioned in app.config with type)
    this.getAllGroceries$ = this.store.select('groceries');

    //  setTimeout(() => {
    //    this.getAllGroceries$ = this.store.select('groceries');
    //  }, 3000);
  }

  addToBucket(item: Bucket) {
    // create action for add grocery into bucket & pass paylaod with increasing quantity
    let queParam = {
      id: item.id,
      name: item.name,
      quantity: 1
    }

    // write action
    this.store.dispatch(addGroceryToBucket({ payload: queParam }))
  }
  removeFromBucket(item: Bucket) {

  }
}


