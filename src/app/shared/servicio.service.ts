import { Injectable } from '@angular/core';
import { Libros } from '../models/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
 
  public libros: Libros[];

  constructor() { 

    this.libros = [
      new Libros(1,1,"El principito","tapa dura","Antoine","19.50€","https://ecat-server.grupo-sm.com/ecat_Imagenes/Original/209623_279253.jpg"),
      new Libros(2,2,"Manual de cocina","tapa blanda","Maria Martinez","10.50€","https://imagessl2.casadellibro.com/a/l/t5/92/9788491646792.jpg"),
      new Libros(3,3,"El bosque despierto","tapa dura","Carolina Blabla","16.90€","https://www.adobe.com/es/express/create/cover/media_10487a00f81e45735d68f68bc2739b65bb4997de1.png?width=400&format=png&optimize=medium")
    ]

  }

  public add(libros: Libros): void{
    this.libros.push(libros)
  }

  public getAll():Libros[] {

    return this.libros
  }

  public getOne(idlib: number): Libros{

    for(let i = 0; i<this.libros.length; i++){
      if(this.libros[i].Id_libro == idlib ){
        return this.libros[i]
      }
    }
  }

  public edit(libro: Libros):boolean{
    
    for(let i=0; i<this.libros.length; i++){

      if(this.libros[i].Id_libro == libro.Id_libro){

        this.libros[i] = libro
      }
    
    return true
    }
  }

  public delete(id: number):boolean{

    for(let i=0; i<this.libros.length; i++){

      if(this.libros[i].Id_libro == id){
        this.libros.splice(i,1)
      }
    }
      return true
  }
}
