import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { CidadeComponent } from './cidade/cidade.component';
import { EstadoComponent } from './estado/estado.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { TabelaPrecoComponent } from './tabelapreco/tabelapreco.component';
import { ProdutoComponent } from './produto/produto.component';
import { PedidoComponent } from './pedido/pedido.component';


const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'estado', component: EstadoComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'tabelapreco', component: TabelaPrecoComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: '**', redirectTo: 'pedido' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }