import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private afAuth: AngularFireAuth, private router: Router) { }

    canActivate() {
    // if (localStorage.getItem('isLoggedin')) {
    //     return true;
    // }

    if (localStorage.getItem('firebase:authUser:AIzaSyDmSX9Wki73m_rWrFXphMish-V75CcCG7k:[DEFAULT]')) {
        
        return true;
    }

    else {
        this.router.navigate(['/login']);
        return false;
    }


    // canActivate(nextState, replace) {
    //     if (!this.afAuth.auth.currentUser) {
    //         let hasLocalStorageUser = false;
    //         for (let key in localStorage) {
    //             console.log(key);
    //             if (key.startsWith("firebase:authUser:")) {
    //                 hasLocalStorageUser = true;
    //                 return true;
    //             }
    //         }
    //         if (!hasLocalStorageUser) {
    //             console.log('Attempting to access a secure route. Please authenticate first.');
    //             this.router.navigate(['/login']);
    //             // replace({
    //             //     pathname: '/login',
    //             //     state: { nextPathname: nextState.location.pathname }
    //             // });
    //         }
    //     }

    // }
}
}
