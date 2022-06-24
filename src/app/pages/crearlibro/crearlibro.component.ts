import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/shared/servicio.service';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-crearlibro',
  templateUrl: './crearlibro.component.html',
  styleUrls: ['./crearlibro.component.css']
})
export class CrearlibroComponent implements OnInit {

  public mylibros:Libros

  constructor(public librosService: LibrosService) {

  }

  anadirLibro(idLibro:number, idUsuario:number, titulo:string, tipo:string, autor:string, precio:string, foto:string ){
    let nuevoLibro = new Libros(idLibro,idUsuario,titulo,tipo,autor,precio,foto)
    this.librosService.add(nuevoLibro)
    console.log(nuevoLibro)
}

  
ngOnInit(): void {
}

}


