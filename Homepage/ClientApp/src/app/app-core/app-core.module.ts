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
        loadChildren: () => import('../home/home.module')
          .then(m => m.HomeModule),
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module')
          .then(m => m.HomeModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('../authentication/authentication.module')
          .then(m => m.AuthenticationModule)
      },
      {
        path: 'factorio',
        loadChildren: () => import('../factorio/factorio.module')
          .then(m => m.FactorioModule),
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
