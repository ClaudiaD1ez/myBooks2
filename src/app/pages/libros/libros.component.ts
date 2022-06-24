import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/shared/servicio.service';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

public mislibros: Libros[]

  constructor(public librosService: LibrosService) {
     
         this.mislibros=this.librosService.getAll();
         

  }

  mostrarLibro(id_lib:HTMLInputElement){
    console.log(id_lib.value);
    
      if(id_lib.value){
        let id = parseInt(id_lib.value)
        console.log("Aqui llego")
        this.mislibros = []
         this.mislibros[0] = this.librosService.getOne(id)

      }else{
        this.mislibros=this.librosService.getAll();

      }

  }

  borrarLibro(Id_libro:string){
    console.log(Id_libro)
    let id:number = parseInt(Id_libro)
    this.librosService.delete(id);

  }

  
  ngOnInit(): void {
  }

}


