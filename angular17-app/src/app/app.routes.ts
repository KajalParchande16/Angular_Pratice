import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

export const routes: Routes = [
    {
        path:'user',
        component:UsersComponent
    },
     {
        path:'employee',
        component:EmployeeComponent
    },
    {
        path:'reactive',
        component:ReactiveFormComponent
    }
];
