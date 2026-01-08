import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilityService } from '../../core/utility.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TempErrorComponent } from '../../shared/temp-error/temp-error.component';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, TempErrorComponent, NgSelectModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  modalService = inject(NgbModal);
  modal: any;
  dynamicModal = inject(UtilityService);

  empObj: Employee = new Employee();
  showError: boolean = false;
  selectedProject: any;
  projectList: any[] = [
    {
      id: 1,
      name: 'CRM'
    },
    {
      id: 2,
      name: 'ERP'
    },
    {
      id: 3,
      name: 'Deal-Distributor'
    },
    {
      id: 4,
      name: 'Website'
    }
  ]
  onProjectChange(id: any) {
    this.empObj.tasks = [];
    if (!!id) {
      this.addTaskRow();
    }
    else {
    }
    // console.log(id);
    // console.log(this.empObj)
  }

  addTaskRow() {
    this.empObj.tasks.push(new Tasks());
  }

  removeTaskRow(index: number) {
    this.empObj.tasks.splice(index, 1);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.showError = true;
      return;
    }
    console.log(this.empObj); // form data is ready
  }

  openModal(c: any) {
    this.modal = this.modalService.open(c, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
      windowClass: 'modal-sm'

    })
  }

  openModal1(comp: any) {
    this.dynamicModal.open(comp, 'lg', 'right')
  }

  openLargeModal(c: any) {
    this.dynamicModal.open(c, 'lg', 'left')

  }

  openLargeBottomModal(c: any) {
    this.dynamicModal.open(c, 'lg', 'bottom')

  }
  openLargeCenterModal(c: any) {
    this.dynamicModal.open(c, 'lg')

  }
  openLargeTopModal(c: any) {
    this.dynamicModal.open(c, 'lg', 'top')

  }
  openLargeFullScreenModal(c: any) {
    this.dynamicModal.open(c, 'lg', 'center', {
      fullscreen: true
    })

  }
}


export class Employee {
  id = 0;
  name = "";
  email = "";
  mobileNo = "";
  state = "";
  city = "";
  address = "";
  projectId = null;
  tasks: Tasks[] = [];

  constructor(initial?: Partial<Employee>) {
    Object.assign(this, initial)
  }

}

export interface Project {
  id: number,
  name: string,
  task?: Tasks
}

export class Tasks {
  id: number | null = null;
  taskName = "";
  duration: number | null = null;

}