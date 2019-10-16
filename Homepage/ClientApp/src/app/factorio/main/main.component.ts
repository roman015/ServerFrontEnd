import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ServerStatus: string;
  ServerIp: string;
  loading: boolean = false;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  CheckServer(event: any) {
    let checkUrl = 'http://api.roman015.com/Factorio/Check';
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': "Bearer " + localStorage.getItem("loginToken").toString()
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.loading = true;
    this.http
      .get<CheckResponse>(checkUrl, requestOptions)
      .subscribe(
        result => {
          this.ServerStatus = result.status;
          this.ServerIp = result.ip;
          this.loading = false;
        },
        error => {
          this.ServerStatus = 'ERROR ACCQUIRING STATUS';
          this.ServerIp = undefined;
          this.loading = false;
        }
      );
  }

  StartServer(event: any) {
    let checkUrl = 'http://api.roman015.com/Factorio/Start';
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': "Bearer " + localStorage.getItem("loginToken").toString()
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.loading = true;
    this.http
      .get<StartResponse>(checkUrl, requestOptions)
      .subscribe(
        result => {
          this.ServerStatus = result.status;
          this.ServerIp = result.ip;
          this.loading = false;
        },
        error => {
          this.ServerStatus = 'ERROR ACCQUIRING STATUS';
          this.ServerIp = undefined;
          this.loading = false;
        }
      );
  }

  StopServer(event: any) {
    let checkUrl = 'http://api.roman015.com/Factorio/Stop';
    let headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': "Bearer " + localStorage.getItem("loginToken").toString()
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    this.loading = true;
    this.http
      .get<StopResponse>(checkUrl, requestOptions)
      .subscribe(
        result => {
          this.ServerStatus = result.status;
          this.ServerIp = undefined;
          this.loading = false;
        },
        error => {
          this.ServerStatus = 'ERROR ACCQUIRING STATUS';
          this.ServerIp = undefined;
          this.loading = false;
        }
      );
  }
}

interface StartResponse {
  status: string;
  ip: string;
  version: string;
}

interface StopResponse {
  status: string;
}

interface CheckResponse {
  status: string;
  ip: string;
}
