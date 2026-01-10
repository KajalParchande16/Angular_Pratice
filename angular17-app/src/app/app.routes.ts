import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { CrudWithJsonServerComponent } from './pages/crud-with-json-server/crud-with-json-server.component';

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
        path:'crud',
        component:CrudWithJsonServerComponent
    },
    {
        path:'reactive',
        component:ReactiveFormComponent
    }
];
