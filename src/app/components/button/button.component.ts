import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Router } from '@angular/router'


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string; 
  height: number;
  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    
  }

  

onClickButton(event) {
  this.onClick.emit(event);
}

btnGuardar(){
  console.log("Se guardo el formulario")
}



}
