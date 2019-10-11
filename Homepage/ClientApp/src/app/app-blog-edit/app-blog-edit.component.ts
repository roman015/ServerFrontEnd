import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-blog-edit',
  templateUrl: './app-blog-edit.component.html',
  styleUrls: ['./app-blog-edit.component.css']
})
export class AppBlogEditComponent implements OnInit {

  public markdown: string = '';
  constructor() { }

  ngOnInit() {
  }

}
