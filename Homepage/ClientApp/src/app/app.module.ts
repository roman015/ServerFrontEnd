import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppSharedModule } from './app-shared/app-shared.module';
import { AppCoreModule } from './app-core/app-core.module';
import { FactorioModule } from './factorio/factorio.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppSharedModule,
    AppCoreModule,
    FactorioModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
