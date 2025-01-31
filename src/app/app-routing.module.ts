import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path:'login',component: LoginComponent,
  },
  { 
    path: 'index', component: IndexComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
