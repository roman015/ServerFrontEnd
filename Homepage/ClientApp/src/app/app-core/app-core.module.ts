import { NgModule } from '@angular/core';
import { AppSharedModule } from '../app-shared/app-shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from '../app-shared/services/auth-guard.service';


@NgModule({
  imports: [
    AppSharedModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: '../home/home.module#HomeModule',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: '../home/home.module#HomeModule'
      },
      {
        path: 'auth',
        loadChildren: '../authentication/authentication.module#AuthenticationModule'
      },
      {
        path: 'factorio',
        loadChildren: '../factorio/factorio.module#FactorioModule',
        canActivate: [AuthGuardService]
      },
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule,
  ],
  declarations: []
})
export class AppCoreModule { }
