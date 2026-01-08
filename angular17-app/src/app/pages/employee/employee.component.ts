import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilityService } from '../../core/utility.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  modalService=inject(NgbModal);
modal:any;
dynamicModal=inject(UtilityService);

  openModal(c:any)
  {
this.modal=this.modalService.open(c,{
  size:'lg',
  backdrop:'static',
  keyboard:false,
  windowClass:'modal-sm'

})
  }

  openModal1(comp:any)
  {
    this.dynamicModal.open(comp,'lg','right')
  }

  openLargeModal(c:any)
  {
    this.dynamicModal.open(c,'lg','left')

  }

   openLargeBottomModal(c:any)
  {
    this.dynamicModal.open(c,'lg','bottom')

  }
   openLargeCenterModal(c:any)
  {
    this.dynamicModal.open(c,'lg')

  }
   openLargeTopModal(c:any)
  {
    this.dynamicModal.open(c,'lg','top')

  }
  openLargeFullScreenModal(c:any)
  {
    this.dynamicModal.open(c,'lg','center',{
      fullscreen:true
    })

  }
}
