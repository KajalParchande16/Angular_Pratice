import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { Users } from '../users/users.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TempErrorComponent } from '../../shared/temp-error/temp-error.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-with-json-server',
  standalone: true,
  imports: [FormsModule, CommonModule, TempErrorComponent],
  templateUrl: './crud-with-json-server.component.html',
  styleUrl: './crud-with-json-server.component.css'
})
export class CrudWithJsonServerComponent implements OnInit {
  @ViewChild('userModal') modal!: ElementRef | undefined;

  users: Users[] = [];
  userObj: Users = new Users();
  showError = false;
  http = inject(HttpClient)
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.http.get<Users[]>("https://probable-doodle-r4wvrw54j6rj2x744-3000.app.github.dev/userList").subscribe((res: Users[]) => {
      this.users = res;
    })
  }
  openAddUser() {
    if (!!this.modal) {

      this.modal.nativeElement.style.display = 'block';
    }
  }
  closeModal() {
    if (!!this.modal) {

      this.modal.nativeElement.style.display = 'none';
    }
  }

  editUser(item: any) {

  }

  deleteUser(id: any) {

  }

  updateUser() {

  }

  onSubmit(f: NgForm) {

  }
}
