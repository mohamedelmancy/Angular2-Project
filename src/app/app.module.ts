import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyModuleRoutingModule } from './my-module/my-module-routing.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';
import { ResetPaswordComponent } from './reset-pasword/reset-pasword.component';
import { FormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { TooltipModule } from 'angular2-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLinkActive } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingComponent,
    ResetPaswordComponent,

   

  
  ],
  imports: [
    BrowserModule,  MyModuleRoutingModule , RouterModule, FormsModule, Ng2FilterPipeModule, TooltipModule,BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
