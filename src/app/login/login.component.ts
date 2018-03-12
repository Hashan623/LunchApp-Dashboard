import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'; 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user: firebase.User;
    constructor(public router: Router, private afAuth: AngularFireAuth) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    login() {
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

}
