import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CidadeEntity } from "./cidade.entity";

@Entity({ name: 'cliente' })
export class ClienteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @ManyToOne(type => CidadeEntity, { eager: true, nullable: false })//eager: "ansioso" traz dados dos parentes
    @JoinColumn({ name: 'cidade_id', })
    cidade: CidadeEntity;

    
    
    //ADICIONAR OUTROS CAMPOS

}