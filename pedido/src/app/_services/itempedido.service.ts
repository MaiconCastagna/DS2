import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ProdutoEntity } from './produto.service';

@Injectable({
    providedIn: 'root'
})

export class ItemPedidoService {

    constructor(private http: HttpClient) { }

    public find(): Observable<ItemPedidoEntity[]> {
        return this.http.get<ItemPedidoEntity[]>(environment.urlSaaS + '/pedidos');
    }

    public save(cliente: ItemPedidoEntity) {
        if (cliente.id) {
            return this.update(cliente);
        } else {
            return this.create(cliente);
        }
    }

    public delete(id: number): Observable<ItemPedidoEntity> {
        return this.http.delete<ItemPedidoEntity>(environment.urlSaaS + '/pedidos/' + id);
    }

    private create(cliente: ItemPedidoEntity): Observable<ItemPedidoEntity> {
        return this.http.post<ItemPedidoEntity>(environment.urlSaaS + '/pedidos', cliente);
    }

    private update(cliente: ItemPedidoEntity): Observable<ItemPedidoEntity> {
        return this.http.put<ItemPedidoEntity>(environment.urlSaaS + '/pedidos/' + cliente.id, cliente);
    }
}

export class ItemPedidoEntity {
    id: number;
    qtdade: number;
    vlrunit: number;
    //pedido_id: PedidoEntity; TO-DO após implementar pedido
    produto_id: ProdutoEntity;
}