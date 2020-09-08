import { EscolaModel } from './../../escola/model/escola.model';
export class TurmaModel {
    codigoPesquisa:string;
    idEscola:number;
    horasAula:number;
    totalVagas:number;
    totalVagasOcupadas:number;
}

export class TurmaModelSaida {
    codigoPesquisa:string;
    idEscola:number;
    horasAula:number;
    totalVagas:number;
    totalVagasOcupadas:number;
    escola:EscolaModel;
}