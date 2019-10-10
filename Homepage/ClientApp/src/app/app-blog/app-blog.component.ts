import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.css']
})
export class AppBlogComponent implements OnInit {

  public blogPostHTML: string;
  public blogName: string;

  get IsBlogHtmlAvailable(): boolean {
    if(this.blogPostHTML == null || this.blogPostHTML == undefined){
      return false;
    } else {
      return true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  ngOnInit() {
    this.blogName = this.route.snapshot.paramMap.get('name')
      ? this.route.snapshot.paramMap.get('name')
      : '%20';

    this.http
      .get<Blog>(this.baseUrl + 'api/blog/' + this.blogName)
      .subscribe(
        result => {
          this.blogPostHTML = result.html;
        },
        error => {
          console.error(error)
        });
  }

}

interface Blog {
  html: string;
  title: string;
  summary: string;
}
