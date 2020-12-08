import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  logOut(): void{
    this.authService.logOut().then(() => {
      this.router.navigate(['/'])
    })
  }
}
