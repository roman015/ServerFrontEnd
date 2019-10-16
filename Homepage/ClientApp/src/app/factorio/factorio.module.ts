import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent],
  imports: [
    AppSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full',        
      },
    ]),
  ],
})
export class FactorioModule { }
