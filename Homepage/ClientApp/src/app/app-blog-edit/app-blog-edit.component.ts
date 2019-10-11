import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-blog-edit',
  templateUrl: './app-blog-edit.component.html',
  styleUrls: ['./app-blog-edit.component.css']
})
export class AppBlogEditComponent implements OnInit {

  public blogName: string;
  public blogTitle: string = '';
  public blogTags: string = '';
  public blogSummary: string = '';
  public markdown: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit() {
    this.blogName = this.route.snapshot.paramMap.get('name');
  }

}
