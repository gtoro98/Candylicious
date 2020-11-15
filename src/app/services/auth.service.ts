import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { auth, User } from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginWithGoogle(): Promise<void>{
    return this.authLogIn(new auth.GoogleAuthProvider()).then(response => {
      localStorage.setItem('user', JSON.stringify(response.user));
    })
  }

  signUpWithCredentials(email: string, password: string): Promise<void>{
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(response =>{
      if(response){
        localStorage.setItem('user', JSON.stringify(response.user));
      }
    })
  }

  logInWithCredentials(email: string, password: string): Promise<void>{
    return this.afAuth.signInWithEmailAndPassword(email, password).then((response) =>{
      if(response){
        localStorage.setItem('user', JSON.stringify(response.user));
      }
    })
  }

  isAuthenticated(): boolean{
    const user: User = JSON.parse(localStorage.getItem('user'))?? null

    return user !== null;
  }
  private authLogIn(provider: auth.AuthProvider): Promise<auth.UserCredential>{
    return this.afAuth.signInWithPopup(provider);
  }
  getCurrentUser(): Observable<User>{
    return this.afAuth.authState;
  }

  logOut(): Promise<void>{
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    }).catch(err => console.log(err))
  }

}
