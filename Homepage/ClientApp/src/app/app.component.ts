import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  prevGdprAcceptanceDateMs = 0;

  constructor(private toastr: ToastrService) {
    this.prevGdprAcceptanceDateMs = Number(localStorage.getItem("prevGdprAcceptanceDateMs"));

    if(this.prevGdprAcceptanceDateMs == NaN){
      this.triggerGdprPopup();
    } else {
      var deadline = new Date(this.prevGdprAcceptanceDateMs);
      deadline = new Date(deadline.getTime() + (1000 * 60 * 60 * 2));//(1000 * 60 * 60 * 24) * 30);

      if(new Date().getTime() > deadline.getTime()){
        this.triggerGdprPopup();
      }
    }
  }

  triggerGdprPopup(){
    this.toastr.info(
      "By using this website, you agree to the use of Cookies. <p><em><u><a href='cookies'>Click Here to know more</a></u></em></p> ", 
      "HEADS UP...", 
      {
        closeButton: true,
        disableTimeOut: true,
        positionClass: 'toast-bottom-center',
        toastClass: 'ngx-toastr wide-toast',
        enableHtml: true
    })
    .onHidden 
    .subscribe(() =>{
      localStorage.setItem("prevGdprAcceptanceDateMs", new Date().getTime().toString());
    });
  }
}
