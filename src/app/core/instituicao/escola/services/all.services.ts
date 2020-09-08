import { EscolaModel } from './../model/escola.model';
import { CidadeModel } from './../model/cidade.model';
import { BairroModel } from './../model/bairro.model';
import { UfModel } from './../model/uf.model';
import { CategoriaModel } from './../model/categoria.model';
import { TipoLocalizacaoModel } from './../model/tipo-localizacao.model';
import { ModalidadeEnsinoModel } from './../model/modalidade-ensino.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceBase } from 'src/app/core/shared/service.base';

@Injectable({providedIn: 'root'})
export class TodosServicosEScolaresService extends ServiceBase {
    constructor(public httpClient: HttpClient) { 
        super(httpClient,'escola');
    }

    obterModalidadesEnsino(): Observable<Array<ModalidadeEnsinoModel>>{
        return this.getArry<ModalidadeEnsinoModel>('modalidades-ensino');
    }

    obterTipoLocalizacao(): Observable<Array<TipoLocalizacaoModel>>{
        return this.getArry<TipoLocalizacaoModel>('tipo-localizacao');
    }

    obterCategoria(): Observable<Array<CategoriaModel>>{
        return this.getArry<CategoriaModel>('categoria-administrativa');
    }
    
    obterEscolas(): Observable<Array<EscolaModel>>{
        return this.getArry<EscolaModel>('todas');
    }

    obterUf(): Observable<Array<UfModel>>{
        this.uflDefault = 'uf'
        return this.getArry<UfModel>('todas');
    }

    obterCidade(): Observable<Array<CidadeModel>>{
        this.uflDefault = 'cidade'
        return this.getArry<CidadeModel>(`todas`);
    }
    
    obterBairros(): Observable<Array<BairroModel>>{
        this.uflDefault = 'bairro'
        return this.getArry<BairroModel>(`todas`);
    }

    cadastrar(escola:EscolaModel): Observable<any>{
        this.uflDefault = ''
        return this.post<any>(``,escola);
    }
}

