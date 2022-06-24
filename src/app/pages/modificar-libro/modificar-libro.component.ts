import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/shared/servicio.service';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-modificar-libro',
  templateUrl: './modificar-libro.component.html',
  styleUrls: ['./modificar-libro.component.css']
})
export class ModificarLibroComponent implements OnInit {

  constructor(public librosService: LibrosService) { }

  modificarLibro(nuevoIdlib:HTMLInputElement, nuevoIdus:HTMLInputElement, nuevoTitulo:string, nuevoTipo:string, nuevoAutor:string,nuevoPrecio:string,nuevoFoto:string ){
    
        let id = parseInt(nuevoIdlib.value)
        let id2 = parseInt(nuevoIdus.value)

    let nuevoLibro = new Libros(id,id2,nuevoTitulo,nuevoTipo,nuevoAutor,nuevoPrecio,nuevoFoto)
    this.librosService.edit(nuevoLibro)

    console.log(nuevoLibro)

  }

  ngOnInit(): void {
  }

}
