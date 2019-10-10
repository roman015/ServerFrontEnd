import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      var topic = params['topic'];

      if (topic) {
        document.getElementById(topic).scrollIntoView(true);
      }
    });
  }

  scroll(htmlElement: HTMLElement) {
    htmlElement.scrollIntoView({ behavior: 'smooth' });
  }

}
