import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  @ViewChild('userModal') usermodal: ElementRef | undefined;
  users:Users[] = [
    // { name: 'Alice', email: 'alice@example.com', status: 'active' },
    // { name: 'Bob', email: 'bob@example.com', status: 'inactive' },
    // { name: 'Charlie', email: 'charlie@example.com', status: 'active' }
  ];

  user: Users = new Users();
  ngOnInit()
  {
    const localData=localStorage.getItem('angular-17-crud');
    if(localData!=null)
    {
      this.users=JSON.parse(localData);
    }
  }
  openAddUser() {
    this.user=new Users();
    const modal = document.getElementById('userModal');
    console.log(modal);
    if (modal) {

      modal.style.display = 'block';
    }
  }

  closeModal() {
    if (this.usermodal != null) {
      this.usermodal.nativeElement.style.display = 'none';
    }
  }
  onSubmit() {
    // debugger;
    const storeDataToLocalStorage = localStorage.getItem('angular-17-crud');
    if (storeDataToLocalStorage != null) {
      const oldArr=JSON.parse(storeDataToLocalStorage);
      oldArr.push(this.user);
      this.users=oldArr;
      localStorage.setItem('angular-17-crud', JSON.stringify(oldArr))

    }
    else {
      const usersArr = [];
      usersArr.push(this.user);
      this.users=usersArr;
      localStorage.setItem('angular-17-crud', JSON.stringify(usersArr))
    }
    this.closeModal();
  }
}

export class Users {
  name: string;
  email: string;
  city: string;
  state: string;
  pincode: number;
  address: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.city = "";
    this.state = "";
    this.pincode = 0;
    this.address = "";
  }
}


