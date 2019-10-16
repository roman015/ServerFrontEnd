import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppSharedModule } from '../app-shared/app-shared.module';


@NgModule({  
  declarations: [LoginComponent],
  imports: [
    AppSharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },      
    ]),
  ],
})
export class AuthenticationModule { }
