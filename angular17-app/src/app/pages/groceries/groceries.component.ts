import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Store } from '@ngrx/store';
import { Grocery } from '../../shared/model/grocery';
import { map, Observable } from 'rxjs';
import { addGroceryToBucket, removeFromBucket } from '../../ngrx-store/action/addGroceryToBucket.action';
import { selectGrocery, selectGroceryByType } from '../../ngrx-store/selector/grocery.selector';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule, NgSelectModule],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css'
})
export class GroceriesComponent {
  groceryList!: Observable<string[]>
  getAllGroceries$!: Observable<Grocery[]>;
  filteredGroceries$?: Observable<Grocery[]>;
  // created variable for store data
  constructor(private store: Store<{ groceries: Grocery[] }>) {
    // for store DI getting all griceries (passing reducer name mentioned in app.config with type)
    // this.getAllGroceries$ = this.store.select('groceries');
    this.getAllGroceries$ = this.store.select(selectGrocery);

  }
  ngOnInit() {
    // this.groceryList=this.store.select('groceries');
    // this.store.select('groceries').subscribe((res)=>{
    //   this.groceryList= [...new Set(res.map((e)=>e.type))];
    // });
    this.groceryList = this.store.select('groceries').pipe(
      map(res => [...new Set(res.map((e) => e.type))].map((type) => type.charAt(0).toUpperCase() + type.slice(1)))
    )
  }

  selectType(e: string) {
    let selectedType = e;
    if (selectedType) {
      this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType))
    }
    else {
      this.filteredGroceries$ = undefined;
    }

  }
  addToBucket(item: Grocery) {
    // create action for add grocery into bucket & pass paylaod with increasing quantity
    let queParam = {
      id: item.id,
      name: item.name,
      quantity: 1
    }

    // write action
    this.store.dispatch(addGroceryToBucket({ payload: queParam }))
  }
  removeFromBucket(item: Grocery) {
    const payload = {
      id: item.id
    }
    this.store.dispatch(removeFromBucket({ payload }))

  }
}


