import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> {
    let token = localStorage.getItem("loginToken");

    if (!token) {
      console.error("User is not authenticated.");
      this.redirectToLoginPage(route.url.toString());
      return false;
    }
    else {
      let tokenExpiry = new Date(Number(localStorage.getItem("loginTokenExpiry")));
      if (tokenExpiry.getTime() > new Date().getTime()) {
        return true;
      } else {
        localStorage.removeItem("loginToken");
        localStorage.removeItem("loginTokenExpiry");
        return false;
      }
    }
  }

  redirectToLoginPage(returnUrl: string) {
    localStorage.setItem("loginRoute", returnUrl);
    this.router.navigate(['/auth/login']);
  }

}
