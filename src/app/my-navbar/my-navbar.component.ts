import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
@Component({
  selector: 'my-navbar',
  templateUrl: './my-navbar.component.html',
  styleUrls: ['./my-navbar.component.css']
})
export class MyNavbarComponent  {
user$: Observable <firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) {
   this.user$=afAuth.authState;
   }

  logout(){
this.afAuth.signOut();
  }
  
}





