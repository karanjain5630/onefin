import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoggedinGuard } from './services/loggedin.guard';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},

  {path:'movie',loadChildren:()=>import('./movie/movie.module').then(m=>m.MovieModule),canActivate:[LoggedinGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
