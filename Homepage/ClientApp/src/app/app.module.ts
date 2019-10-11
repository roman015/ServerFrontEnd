import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppInfoComponent } from './app-info/app-info.component';
import { AppBlogComponent } from './app-blog/app-blog.component';
import { SafePipe } from './pipes/safeHtmlPipe';
import { MarkdownToHtmlPipe } from './pipes/markdownToHtml';
import { AppBlogEditComponent } from './app-blog-edit/app-blog-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    AppInfoComponent,
    AppBlogComponent,
    SafePipe,
    MarkdownToHtmlPipe,
    AppBlogEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'blog', component: AppBlogComponent },
      { path: 'blog/edit', component: AppBlogEditComponent },
      { path: 'blog/edit/:name', component: AppBlogEditComponent },
      { path: 'blog/:name', component: AppBlogComponent },
      { path: 'info', component: AppInfoComponent },
    ]),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
