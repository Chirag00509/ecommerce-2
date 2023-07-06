import {  CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn()){
    return true;
  }
   // Redirect to the login page
   alert("you are not logged in ! please login to continue..")
   return router.parseUrl('/user/login');
};