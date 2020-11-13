import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {

  @Input() editarProducto: Producto = null;

  productoForm: FormGroup = null;
  label = "Guardar";
  productoId: string = null;

  constructor(
    private productoService: ProductoService, 
    private fb: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    ){ }

  ngOnInit(): void {

    this.createForm();

    this.getUrlParams();
    

  }

  createForm(): void {
    this.productoForm = this.fb.group({
    nombre: [''],
    sabor: [''],
    categoria: [''],
    precio: [''],
    marca: [''],
    descripcion: [''],
   
    });
  }

  getUrlParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.productoId = params.get('productoId');
      console.log('ID',params.get('productoId'))
      if(this.productoId){
        this.productoService.getProducto(this.productoId).subscribe((item) => {
          this.editarProducto = {
            $key: item.payload.id,
            ...item.payload.data(),
          };
          
          this.pathFormValues();
    
        });
      }
    })
  }

  pathFormValues(): void{
    this.productoForm.patchValue({
      nombre: this.editarProducto.nombre,
      sabor: this.editarProducto.sabor,
      categoria: this.editarProducto.categoria,
      precio: this.editarProducto.precio,
      marca: this.editarProducto.marca,
      descripcion: this.editarProducto.descripcion,
    })
  }

  createProducto(newProducto: Producto): void{

    this.productoService.createProducto(newProducto).then(res => {
      this.router.navigate(['/tienda'])
    }).catch(err => console.log(err));

  }


  onSubmit(e: MouseEvent) {
 
    const newProducto: Producto = {
      nombre: this.productoForm.get('nombre').value,
      sabor: this.productoForm.get('sabor').value,
      categoria: this.productoForm.get('categoria').value,
      precio: this.productoForm.get('precio').value,
      marca: this.productoForm.get('marca').value,
      descripcion: this.productoForm.get('descripcion').value
    }
 
    if(this.editarProducto){
      this.productoService.editarProducto(newProducto, this.productoId).then(res => {
        this.router.navigate(['/tienda'])
        console.log("Producto editado")
      }).catch(err => console.log(err));
    }
    else{
      this.createProducto(newProducto)
      console.log("Producto creado")
    }


}

}
