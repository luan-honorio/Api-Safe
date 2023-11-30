export class CreateUserDto {
    id : number;
    nome : string ;
    sobrenome : string;
    email : string ;
    senha : string;
    setor : string; 
    contato : string;
    dataContrato : Date;
    cpf : string ;
    admin : boolean;
    createdAt : Date;
    updatedAt : Date;
}
