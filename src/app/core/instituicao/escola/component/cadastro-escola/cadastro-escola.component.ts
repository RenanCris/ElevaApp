import { EscolaModel } from './../../model/escola.model';
import { TodosServicosEScolaresService } from './../../services/all.services';
import { BairroModel } from './../../model/bairro.model';
import { CidadeModel } from './../../model/cidade.model';
import { UfModel } from './../../model/uf.model';
import { CategoriaModel } from './../../model/categoria.model';
import { TipoLocalizacaoModel } from './../../model/tipo-localizacao.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/shared/base.component';
import { ModalidadeEnsinoModel } from '../../model/modalidade-ensino.model';
import { TelefoneModel } from '../../model/telefone.model';


@Component({
  selector: 'app-cadastro-escola',
  templateUrl: './cadastro-escola.component.html',
  styleUrls: ['./cadastro-escola.component.scss']
})
export class CadastroEscolaComponent extends BaseComponent implements OnInit {

  tipoLocalizacoes: Array<TipoLocalizacaoModel>;
  modalidades: Array<ModalidadeEnsinoModel>;
  categorias: Array<CategoriaModel>;
  ufs:Array<UfModel>;
  cidades:Array<CidadeModel>;
  bairros:Array<BairroModel>;
  escolaModel : EscolaModel;
  ddd:number = 0;
  numero:number = 0;
  modalidade:any;

  constructor(protected spinner: NgxSpinnerService, private service:TodosServicosEScolaresService) {
    super(spinner);
    this.tipoLocalizacoes = new Array<TipoLocalizacaoModel>();
    this.modalidades = new Array<ModalidadeEnsinoModel>();
    this.categorias = new Array<CategoriaModel>();
    this.ufs = new Array<UfModel>();
    this.cidades = new Array<CidadeModel>();
    this.bairros = new Array<BairroModel>();

    this.escolaModel = new  EscolaModel();
  }

  ngOnInit(): void {
   this._carregar();
  }

  private _carregar(): void {
    this.loadStart();

    Promise.all([
      this.carregarModalidade(),
      this.carregarTipoLocalizacao(),
      this.carregaCategoria(),
      this.carregaUF(),
      this.carregaBairros(),
      this.carregaCidade(), 
    ]).finally(() => this.loadStop())
  }

  private carregarModalidade() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterModalidadesEnsino().subscribe(x => {
        this.modalidades = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

  private carregarTipoLocalizacao() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterTipoLocalizacao().subscribe(x => {
        this.tipoLocalizacoes = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

  private carregaCategoria() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterCategoria().subscribe(x => {
        this.categorias = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

  private carregaUF() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterUf().subscribe(x => {
        this.ufs = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

  private carregaBairros() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterBairros().subscribe(x => {
        this.bairros = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

   private carregaCidade() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterCidade().subscribe(x => {
        this.cidades = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

  addTel(): void {
    this.escolaModel.telefones.push(new TelefoneModel(this.ddd,this.numero))
  }

  registrar() : void{

    this.modalidade.forEach(element => {
      this.escolaModel.modalidades.push(new ModalidadeEnsinoModel(element))
    });

    this.service.cadastrar(this.escolaModel).subscribe(x=> {
      this.successMensage('Cadastro Realizado!');

    },error => this.errorMensage(error['error']))
  }
}
