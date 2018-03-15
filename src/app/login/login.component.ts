import { StorageService } from './../storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user: firebase.User;
    constructor(public router: Router, private afAuth: AngularFireAuth,
        //private storageService: StorageService,
        private spinnerService: Ng4LoadingSpinnerService
    ) { }

    ngOnInit() {
        firebase.auth().getRedirectResult().then(result => {
            // If user just signed in or already signed in, hide spinner.
            if (result.user || firebase.auth().currentUser) {
                this.router.navigate(['/dashboard']);
            } else {
                console.log('else');
                this.spinnerService.show();
                setTimeout(function() {
                    this.spinnerService.hide();
                  }.bind(this), 5000)
                }
        });
    

        // firebase.auth().getRedirectResult().then(result => {
        //     if (result.user) {
        //         this.router.navigate(['/dashboard']);
        //     }
        // });

    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login() {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

        // this.spinnerService.show();
        // setTimeout(function () {
        //     this.spinnerService.hide();
        // }.bind(this), 4000);
        // location.reload();

    }


}
