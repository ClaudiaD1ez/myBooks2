import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearlibroComponent } from './pages/crearlibro/crearlibro.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'registro', component:RegistroComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'libros', component:LibrosComponent},
  {path:'crear-libro', component:CrearlibroComponent},
  {path:'modificar-libro',component:ModificarLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
