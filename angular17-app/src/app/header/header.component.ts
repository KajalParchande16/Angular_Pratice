import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MyServicesService } from '../core/services/my-services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule,NgbDropdownModule,NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isMenuCollapsed = true;
mySer=inject(MyServicesService);

onRoleChange(event:any)
{
  // debugger;
this.mySer.roleSub$.next(event.target.value);
this.mySer.roleBehSub.next(event.target.value);
}
}
