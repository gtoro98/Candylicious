import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit(): void {
    console.log("hola")
  }
  public display(){
    const navbar = document.getElementById('myNavBar');
    if(navbar.className === "navbar"){
      navbar.className += " responsive";
    }else{
      navbar.className = "navbar";
    }
  }
  

}


