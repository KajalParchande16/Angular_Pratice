import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MyServicesService } from '../core/services/my-services.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppStore } from '../store/counter.reducer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgbDropdownModule, NgbCollapseModule,AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuCollapsed = true;
  mySer = inject(MyServicesService);

  counterVal: Observable<number> = new Observable<number>

  constructor(private store: Store<AppStore>) {
      this.counterVal=this.store.pipe(select('count'));
  
    }
  onRoleChange(event: any) {
    // debugger;
    this.mySer.roleSub$.next(event.target.value);
    this.mySer.roleBehSub.next(event.target.value);
  }
}
