import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule,NgSelectModule],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css'
})
export class GroceriesComponent {
groceryList:any[]=[
  {id:1,name:'Milk'},
  {id:2,name:'Paneer'},
  {id:3,name:'Shreekhand'}
]
}
