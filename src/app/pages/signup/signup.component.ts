import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,

    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.signUpForm = this.fb.group({
    email: [''],
    contrasena: [''],
    telefono: [''],
    direccion: [''],
   
    });
  }

  logInWithGoogle(): void {
    this.authService.loginWithGoogle().then((response) => { 
      this.router.navigateByUrl('/');
  })
}

  onSubmit():void{
    console.log({
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('contrasena').value,

    })
    this.authService.signUpWithCredentials(
      this.signUpForm.get('email').value,
      this.signUpForm.get('contrasena').value,
    ).then(() => {
      this.router.navigate(["/"])
    }).catch(err => {console.log(err)})
  }
}
