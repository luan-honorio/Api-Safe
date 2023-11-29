import { generateKeySync } from "crypto";
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Init } from "v8";

@Entity({name : 'User'})
export class UserEntity {
    @PrimaryGeneratedColumn({name: 'id'})
    id:number;
    

    @Column({name : 'nome', nullable: false})
    nome : string;

    @Column({name : 'email', nullable: false})
    email : string;
    
    @Column({name : 'cpf', nullable: false, unique : true})
    cpf : string;
    
    @Column({name : 'admin', nullable: false})
    admin : boolean;

    @Column({name : 'createdAt', nullable : false})
    createdAt: Date;

    @Column({name : 'updatedAt', nullable : true})
    updatedAt: Date;
}
