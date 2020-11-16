import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  basePath = '/images';                       
  downloadableURL = '';                      
  task: AngularFireUploadTask;               

  progressValue: Observable<number>;

  constructor(
    private fireStorage: AngularFireStorage,
    private productoService: ProductoService, 
    private fb: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
    ){ }

  ngOnInit(): void {

    this.createForm();

    this.getUrlParams();
    

  }
//new FormControl([''] ,[Validators.required])
  createForm(): void {
    this.productoForm = this.fb.group({
    nombre:[''],
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
      imagen: this.downloadableURL,
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
      descripcion: this.productoForm.get('descripcion').value,
      imagen: this.downloadableURL,
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

async onFileChanged(event) {
  const file = event.target.files[0];
  if (file) {
     const filePath = `${this.basePath}/${file.name}`;  
     this.task =  this.fireStorage.upload(filePath, file);    


     this.progressValue = this.task.percentageChanges();       // <<<<< Percentage of uploading is given


     (await this.task).ref.getDownloadURL().then(url => {this.downloadableURL = url; });  


   } else {  
     alert('No images selected');
     this.downloadableURL = ''; }



 }

}
