import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { EmployeeComponent } from './pages/employee/employee.component';

export const routes: Routes = [
    {
        path:'user',
        component:UsersComponent
    },
     {
        path:'employee',
        component:EmployeeComponent
    }
];
