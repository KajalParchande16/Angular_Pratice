import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { CrudWithJsonServerComponent } from './pages/crud-with-json-server/crud-with-json-server.component';
import { RxjsBasicComponent } from './pages/rxjs-basic/rxjs-basic.component';
import { RxjsOperatorsComponent } from './pages/rxjs-operators/rxjs-operators.component';
import { SubBehReplayComponent } from './pages/sub-beh-replay/sub-beh-replay.component';
import { AdvanceRxjsComponent } from './pages/advance-rxjs/advance-rxjs.component';
import { RxjsCrudComponent } from './pages/rxjs-crud/rxjs-crud.component';
import { AdvanceRxjsOperatosComponent } from './pages/advance-rxjs-operatos/advance-rxjs-operatos.component';
import { CounterComponent } from './pages/counter/counter.component';
import { NgrxLearningComponent } from './pages/ngrx-learning/ngrx-learning.component';
import { BasicComponent } from './pages/signal-learning/basic/basic.component';
import { computed } from '@angular/core';
import { ComputedComponent } from './pages/signal-learning/computed/computed.component';
import { SignalInDepthComponent } from './pages/signal-learning/signal-in-depth/signal-in-depth.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: "full"

    },

    {
        path: 'user',
        component: UsersComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'crud',
        component: CrudWithJsonServerComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path: 'rxjs',
        component: RxjsBasicComponent
    },
    {
        path: 'rxjs-operators',
        component: RxjsOperatorsComponent
    },
    {
        path: 'sub-beh-replay',
        component: SubBehReplayComponent
    },
    {
        path: 'advance-rxjs',
        component: AdvanceRxjsComponent
    },
    {
        path: 'rxjs-crud',
        component: RxjsCrudComponent
    },
    {
        path: 'another-Way',
        component: AdvanceRxjsOperatosComponent
    },
    {
        path: 'NgRx',
        component: CounterComponent
    },
    {
        path: 'NgRx-learning',
        component: NgrxLearningComponent
    },
    {
        path:'basic',
        component:BasicComponent
    },
    {
        path:'computed',
        component:ComputedComponent
    },
    {
        path:'signalInDepth',
        component:SignalInDepthComponent
    }

];
