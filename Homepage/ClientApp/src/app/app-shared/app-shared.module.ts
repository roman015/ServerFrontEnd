import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,   
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,    
  ],
  providers:[
    AuthGuardService
  ]
})
export class AppSharedModule { }
