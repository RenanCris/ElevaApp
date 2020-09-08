import { ModalidadeEnsinoModel } from './modalidade-ensino.model';
import { TipoLocalizacaoModel } from './tipo-localizacao.model';
import { CategoriaModel } from './categoria.model';
import { EnderecoModel } from './endereco.model';
import { TelefoneModel } from './telefone.model';

export class EscolaModel {
    nome:string;
    convenioPoderPublico:boolean;
    atendeEducacaoEspecial:boolean;
    categoriaAdministrativa:CategoriaModel;
    tipoLocalizacao:TipoLocalizacaoModel;
    endereco:EnderecoModel = new EnderecoModel();
    modalidades:Array<ModalidadeEnsinoModel> = new Array<ModalidadeEnsinoModel>();
    telefones: Array<TelefoneModel> = new Array<TelefoneModel>();
}

export class EscolaModelId extends  EscolaModel {
    id:number;
}