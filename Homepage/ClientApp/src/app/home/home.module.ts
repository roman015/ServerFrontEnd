import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from '../app-shared/app-shared.module';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    AppSharedModule,
    RouterModule.forChild([
      { path: '', component: MainComponent, pathMatch: 'full' },      
    ]),
  ],  
})
export class HomeModule { }
