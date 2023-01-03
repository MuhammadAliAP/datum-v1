import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  // {
  //   path:'',redirectTo:'home',pathMatch:'full'
  // },
  {
    path:'',component:HomeComponent
  },
  {
    path:'view/:id',component:ViewComponent
  },
  {
    path:'signin',component:SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
