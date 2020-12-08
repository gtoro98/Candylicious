import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.logInForm = this.fb.group({
    email: [''],
    contrasena: [''],
    });
  }

  logInWithGoogle(): void {
    this.authService.loginWithGoogle().then((response) => { 
      this.router.navigateByUrl('/');
  })
}
onSubmit(){
  this.authService.logInWithCredentials(
    this.logInForm.get('email').value,
    this.logInForm.get('contrasena').value,
  ).then(() => {
    this.router.navigate(["/"])
  })
}
}
