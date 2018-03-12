import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        // if (localStorage.getItem('isLoggedin')) {
        //     return true;
        // }
        
        if (localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
