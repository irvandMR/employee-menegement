import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListComponentEmployee } from './pages/employee/list/list.component';
import { AddComponentEmployee } from './pages/employee/add/add.component';
import { DetailEmployeeComponent } from './pages/employee/detail/detail.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'employee',
    canActivate: [AuthGuard], // Gunakan AuthGuard untuk melindungi rute ini
    children: [
      { path: '', component: ListComponentEmployee },
      { path: 'add', component: AddComponentEmployee },
      { path: ':id', component: DetailEmployeeComponent },
    ],
  },
  // { path: 'employee', component: ListComponentEmployee },
  // { path: 'employee/add', component: AddComponentEmployee },
  // { path: 'employee/:id', component: DetailEmployeeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
