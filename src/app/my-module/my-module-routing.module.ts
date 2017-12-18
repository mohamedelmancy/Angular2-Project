import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AppComponent } from '../app.component';
import {MainComponent} from '../main/main.component';
import {LandingComponent} from '../landing/landing.component';
import {ResetPaswordComponent} from '../reset-pasword/reset-pasword.component'
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'main/:flag',
    component: MainComponent
  },
  {
    path: 'main/:flag/:user',
    component: MainComponent
  },
  {
    path: 'resetPas',
    component: ResetPaswordComponent
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
