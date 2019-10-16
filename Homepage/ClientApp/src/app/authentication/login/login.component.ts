import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userEmail: string = '';
  public userPass: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) { }

  ngOnInit() {
  }

  OnLoginButtonPressed(event: any) {
    this.http
      .post<LoginResult>(this.baseUrl + 'api/Login',
        {
          Email: this.userEmail,
          Otp: this.userPass
        })
      .subscribe(
        result => {
          localStorage.setItem("loginEmail", this.userEmail);
          localStorage.setItem("loginToken", result.token);
          localStorage.setItem("loginTokenExpiry",
            (new Date().getTime() + (1000 * 60 * 30)).toString());
          console.log("Login Success");

          let presetRoute = localStorage.getItem('loginRoute');
          if (presetRoute) {
            this.router.navigate([presetRoute]);
          }
        },
        error => {
          console.log("Login Failed");
        }
      );
  }

}

interface LoginResult {
  token: string;
}
