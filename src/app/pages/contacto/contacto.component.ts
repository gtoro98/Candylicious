import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/models/mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

 mensajeForm: FormGroup = null;

  constructor(
    private mensajeService: MensajeService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
   this.mensajeForm = this.fb.group({
     nombre:[''],
     mensaje: ['']

   })
  }

  nuevoMensaje(){

   
      
      const newMensaje: Mensaje = {
        nombre: this.mensajeForm.get('nombre').value,
        mensaje: this.mensajeForm.get('mensaje').value,
      }

      this.mensajeService.createMensaje(newMensaje).then(res => {
        this.router.navigate(['/contacto'])
      }).catch(err => console.log(err));
      console.log("Mensaje Creado")
    
    
  }
}
