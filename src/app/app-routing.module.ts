import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'user', component: UserComponent},
  {path:'user',redirectTo:'/user',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
