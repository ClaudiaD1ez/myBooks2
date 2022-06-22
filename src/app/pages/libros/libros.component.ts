import { Component, OnInit } from '@angular/core';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libros[];

  constructor() {

      this.libros = [
        new Libros(1,1,"El principito","tapa dura","Antoine","19.50€","https://ecat-server.grupo-sm.com/ecat_Imagenes/Original/209623_279253.jpg"),
        new Libros(2,2,"Manual de cocina","tapa blanda","Maria Martinez","10.50€","https://imagessl2.casadellibro.com/a/l/t5/92/9788491646792.jpg"),
        new Libros(3,3,"El bosque despierto","tapa dura","Carolina Blabla","16.90€","https://www.adobe.com/es/express/create/cover/media_10487a00f81e45735d68f68bc2739b65bb4997de1.png?width=400&format=png&optimize=medium")
      ]

   }
    
  ngOnInit(): void {
  }

  public enviar(nuevoIdLibro:HTMLInputElement,nuevoIdUsuario:HTMLInputElement,nuevoTitulo:HTMLInputElement,nuevoTipo:HTMLInputElement,nuevoAutor:HTMLInputElement,nuevoPrecio:HTMLInputElement,nuevoURL:HTMLInputElement):void{
      
    let libro:Libros = new Libros(nuevoIdLibro.valueAsNumber,nuevoIdUsuario.valueAsNumber,nuevoTitulo.value,nuevoTipo.value,nuevoAutor.value,nuevoPrecio.value,nuevoURL.value)
      
    this.libros.push(libro)
  
  }

}
