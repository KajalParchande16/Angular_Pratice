import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStore } from '../../store/counter.reducer';
import { increment, decrement } from '../../store/counter.action'
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counterVal:Observable<number>=new Observable<number>
  constructor(private store: Store<AppStore>) {
    this.counterVal=this.store.pipe(select('count'));

  }
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())

  }

}
