import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario1: Usuario;

  constructor() {  
    
    this.usuario1 = new Usuario(1, "Pepe", "Salazar","pepe@pepe.com","https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg","contraseña")
  
  }

  ngOnInit(): void {
  }

  public enviar(nuevoNombre:HTMLInputElement,nuevoApellido:HTMLInputElement,nuevoCorreo:HTMLInputElement,nuevoURL:HTMLInputElement){

    this.usuario1.nombre=nuevoNombre.value
    this.usuario1.apellido=nuevoApellido.value
    this.usuario1.correo=nuevoCorreo.value
    this.usuario1.url=nuevoURL.value

  }

}
