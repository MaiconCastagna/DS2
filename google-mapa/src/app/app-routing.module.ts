import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';


const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'mapa', component: MapaComponent },

  //otherwise
  { path: '**', redirectTo: 'mapa' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
