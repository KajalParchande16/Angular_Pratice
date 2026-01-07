import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UtilityService } from '../../core/utility.service';
import { CommonModule } from '@angular/common';
import { TempErrorComponent } from '../../shared/temp-error/temp-error.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule,CommonModule,TempErrorComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  @ViewChild('userModal') usermodal: ElementRef | undefined;
  users: Users[] = [
    // { name: 'Alice', email: 'alice@example.com', status: 'active' },
    // { name: 'Bob', email: 'bob@example.com', status: 'inactive' },
    // { name: 'Charlie', email: 'charlie@example.com', status: 'active' }
  ];

  userObj: Users = new Users();
  us = inject(UtilityService);
  showError=false;

  ngOnInit() {
    const localData = localStorage.getItem('angular-17-crud');
    if (localData != null) {
      this.users = JSON.parse(localData);
    }
  }

  openAddUser() {
    const modal = document.getElementById('userModal');
    console.log(modal);
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    this.userObj = new Users();
    if (this.usermodal != null) {
      this.usermodal.nativeElement.style.display = 'none';
    }
  }

  onSubmit(userForm:NgForm) {
    // debugger;
  //  if (userForm.invalid) {
  //   this.showError = true;
  //   console.log(this.showError)
  //   return;
  // }

    const storeDataToLocalStorage = localStorage.getItem('angular-17-crud');
    if (storeDataToLocalStorage != null) {
      const oldArr = JSON.parse(storeDataToLocalStorage);
      this.userObj.id = oldArr.length + 1;
      oldArr.push(this.userObj);
      this.users = oldArr;
      localStorage.setItem('angular-17-crud', JSON.stringify(oldArr))
    }
    else {
      const usersArr = [];
      usersArr.push(this.userObj);
      this.userObj.id = 1;
      this.users = usersArr;
      localStorage.setItem('angular-17-crud', JSON.stringify(usersArr))
    }
    this.closeModal();
  }

  editUser(item: Users) {
    // make item as deepcopy bcause when we open edit modal and make chnages it will direcly reflect on table data 
    // this.userObj=JSON.parse(JSON.stringify(item));
    this.userObj = this.us.makeDeepCopy(item);
    this.openAddUser();
  }

  updateUser() {
    const currentUser = this.users.find((u) => u.id === this.userObj.id);
    // console.log(currentUser);
    if (currentUser !== undefined) {
      currentUser.name = this.userObj.name;
      currentUser.email = this.userObj.email;
      currentUser.city = this.userObj.city;
      currentUser.state = this.userObj.state;
      currentUser.pincode = this.userObj.pincode;
      currentUser.address = this.userObj.address;
    }
    localStorage.setItem('angular-17-crud', JSON.stringify(this.users));
    this.closeModal();
  }

  deleteUser(item: Users) {
    let confirmDelete = confirm("Are you sure want to delete user?")
    if (confirmDelete) {
      const currentUser = this.users.findIndex((u) => u.id === this.userObj.id);
      if (!!currentUser) {
        this.users.splice(currentUser, 1);
        localStorage.setItem('angular-17-crud', JSON.stringify(this.users));
      }
    }
  }

  getErrorMessage(fieldName:String){
    return `${fieldName} is Required`
  }
}

export class Users {
  id: number;
  name: string;
  email: string;
  city: string;
  state: string;
  pincode: number;
  address: string;

  constructor() {
    this.id = 0;
    this.name = "";
    this.email = "";
    this.city = "";
    this.state = "";
    this.pincode = 0;
    this.address = "";
  }
}


