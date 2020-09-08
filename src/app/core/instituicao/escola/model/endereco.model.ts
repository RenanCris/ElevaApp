import { ModelBase } from 'src/app/core/shared/model-base';

export class EnderecoModel extends ModelBase{
    idCidade:number;
    idBairro:number;
    numero:string;
    complemento:string;
    descricao:string;
}