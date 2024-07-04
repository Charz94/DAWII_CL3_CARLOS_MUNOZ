import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:'',component:MenuComponent
    },
    {
        path:'personajes',component:PersonajesComponent
    },
    {
        path:'comentarios',component:ComentariosComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }