import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cambiar_1(): void {
    var imagen_3 = document.getElementById('img_3');
    var imagen_2 = document.getElementById('img_2');
    var imagen_1 = document.getElementById('img_1');
    imagen_3.style.opacity = '0';
    imagen_2.style.opacity = '0';
    imagen_1.style.opacity = '1';
  }

  cambiar_2(): void {
    var imagen_3 = document.getElementById('img_3');
    var imagen_2 = document.getElementById('img_2');
    var imagen_1 = document.getElementById('img_1');
    imagen_3.style.opacity = '0';
    imagen_2.style.opacity = '1';
    imagen_1.style.opacity = '0';
  }

  cambiar_3(): void {
    var imagen_3 = document.getElementById('img_3');
    var imagen_2 = document.getElementById('img_2');
    var imagen_1 = document.getElementById('img_1');
    imagen_3.style.opacity = '1';
    imagen_2.style.opacity = '0';
    imagen_1.style.opacity = '0';
  }

}
