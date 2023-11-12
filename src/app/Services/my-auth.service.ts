import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {

  constructor(public afAuth : AngularFireAuth) { }

  SignIn(userName : any , password : any) {
    return this.afAuth
      .signInWithEmailAndPassword(userName, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  SignOut() {
    return this.afAuth.signOut().then(() => {
      window.alert('Logged out!');
    });
  }
}
