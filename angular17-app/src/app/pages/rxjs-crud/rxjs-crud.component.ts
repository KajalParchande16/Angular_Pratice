import { Component, inject, OnInit } from '@angular/core';
import { ControllerService } from '../../core/services/controller/controller.service';
import { User } from '../../core/User/user';
import { UtilityService } from '../../core/utility.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-crud',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rxjs-crud.component.html',
  styleUrl: './rxjs-crud.component.css'
})
export class RxjsCrudComponent implements OnInit {

  cs = inject(ControllerService);
  us = inject(UtilityService)
  userObj: any = {};
  userList: User[] = [];
  dynamicModal = inject(UtilityService);
  showError: boolean = false;
  modal: any;
  ngOnInit(): void {
    this.cs.getAllUsers().subscribe((res) => {
      console.log(res);
      this.userList = res;
    })
  }

  openUserModal(c: any) {
    this.dynamicModal.open(c, 'lg', 'right')
  }

  closeModal() {
    this.userObj = {};
    this.dynamicModal.closeAll();
    this.showError = false;
  }

  addUser(form: NgForm) {
    console.log(form);
    if (form.valid) {
      this.cs.addUser(this.userObj).pipe(
        switchMap(() => this.cs.getAllUsers())
        // without switchMap we need to subscribe twise getAllUsers().subscribe & outer also
      ).subscribe((res) => {
        this.userList = res;
        this.closeModal();
      })
    }

  }

  editUser(c: any, item: User) {
    console.log(item);
    this.userObj = this.us.makeDeepCopy(item);
    console.log(this.userObj);
    this.openUserModal(c);
    // this.cs.updateUser({...item}).pipe(
    //   switchMap(()=>this.cs.getAllUsers())
    // ).subscribe((res)=>{
    //   this.userList=res;
    //   alert("User Updated");
    //   this.closeModal();

    // })
  }

  updateUser() {
    this.cs.updateUser({ ...this.userObj }).pipe(
      switchMap(() => this.cs.getAllUsers())
    ).subscribe((res: any) => {
      this.userList = res;
      // alert("User Updated");
      this.closeModal();

    })
  }

  deleteUser(id: any) {
    this.cs.deleteUser(id).pipe(
      switchMap(() => this.cs.getAllUsers())
    ).subscribe((res) => {
      console.log("User Deleteed ");
      this.userList = res;
    })
  }
}
