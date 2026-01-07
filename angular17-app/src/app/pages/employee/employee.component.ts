import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  openModal(c:any)
  {
this.modal=this.modalService.open(c,{
  size:'lg',
  backdrop:'static',
  keyboard:false,
  windowClass:'modal-sm'

})
  }
}
