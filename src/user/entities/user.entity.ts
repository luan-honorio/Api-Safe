import { generateKeySync } from "crypto";
import { tr } from "date-fns/locale";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Init } from "v8";

@Entity({name : 'User'})
export class UserEntity {
    @PrimaryGeneratedColumn({name: 'id'})
    id:number;
    

    @Column({name : 'nome', nullable: false})
    nome : string;

    @Column({name : 'sobrenome', nullable: false})
    sobrenome : string;

    @Column({name : 'email', nullable: false, unique: true})
    email : string;

    @Column({name : 'senha', nullable: false})
    senha : string;

    @Column({name : 'setor', nullable: false})
    setor : string;

    @Column({name : 'contato', nullable: false, unique : true})
    contato : string;

    @Column({name : 'Datacontrato', nullable: true})
    DataContrato : string;

    @Column({name : 'cpf', nullable: false, unique : true})
    cpf : string;
    
    @Column({name : 'admin', nullable: false})
    admin : boolean;

    @Column({name : 'createdAt', nullable : false})
    createdAt: Date;

    @Column({name : 'updatedAt', nullable : true})
    updatedAt: Date;
}