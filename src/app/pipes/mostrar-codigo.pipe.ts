import { Pipe, PipeTransform } from '@angular/core';
import { Libros } from '../models/libros';

@Pipe({
  name: 'mostrarCodigo'
})
export class MostrarCodigoPipe implements PipeTransform {

  transform(value: number): string {
    
    let result:string;
    result = "Ref-" + value
    return result;
  }

}
