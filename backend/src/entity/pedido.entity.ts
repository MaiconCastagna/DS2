import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { ClienteEntity } from './cliente.entity';
import { VendedorEntity } from './vendedor.entity';
import { ItemPedidoEntity } from './itempedido.entity';
import { type } from 'os';


@Entity({ name: 'pedido' })
export class PedidoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 6 })
    codigo: string;

    @Column({ nullable: false, type: 'date' })
    dtpedido: Date;

    @Column({ nullable: false, length: 100 })
    observacao: string;

    @ManyToOne(type => ClienteEntity, { eager: true })
    @JoinColumn({ name: 'cliente_id' })
    cliente: ClienteEntity;

    @ManyToOne(type => VendedorEntity, { eager: true })
    @JoinColumn({ name: 'vendedor_id' })
    vendedor: VendedorEntity;

    @OneToMany(type => ItemPedidoEntity, item => item.pedido)
    itens: ItemPedidoEntity[];

}