import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { auth, User } from 'firebase'
import { UserDetails } from '../models/user-details';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private userCollection: AngularFirestoreCollection<UserDetails>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {

    this.userCollection = this.db.collection<UserDetails>('user');
   }

  loginWithGoogle(): Promise<void>{
    return this.authLogIn(new auth.GoogleAuthProvider()).then(async response => {
    if(response){
      const userDetails = (await this.getUserDetails(response.user.uid).get()).docs;
      if(userDetails[0]){
        console.log(userDetails[0].data())
        localStorage.setItem('user', JSON.stringify(userDetails[0].data()));
      }
      else{
        const newUser = {
          userId: response.user.uid,
          nombre: response.user.displayName,
          email: response.user.email,
          isAdmin: false,
        }
        this.createUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser))
      }  

 
    }
      
    })
  }

  signUpWithCredentials(nombre: string, email: string, password: string, telefono: string, direccion: string): Promise<void>{
    return this.afAuth.createUserWithEmailAndPassword(email, password).then(response =>{
      if(response){
        const newUser = {
          userId: response.user.uid,
          nombre: nombre,
          email: email,
          telefono: telefono,
          direccion: direccion,
          isAdmin: false,
        }
        this.createUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser));
      }
    })
  }

  createUser(newUser: UserDetails): Promise<any>{
    return this.userCollection.add(newUser);
  }

  logInWithCredentials(email: string, password: string): Promise<void>{
    return this.afAuth.signInWithEmailAndPassword(email, password).then(async (response) =>{
      if(response){
        const userDetails = (await this.getUserDetails(response.user.uid).get()).docs;
        console.log(userDetails[0].data())
        localStorage.setItem('user', JSON.stringify(userDetails[0].data()));
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
  getUserDetails(userId: string) {
    return this.userCollection.ref.where('userId', '==' , userId);
  }

  logOut(): Promise<void>{
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    }).catch(err => console.log(err))
  }

}
