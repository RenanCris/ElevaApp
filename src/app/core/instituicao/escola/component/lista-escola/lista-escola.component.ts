import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/shared/base.component';
import { NgxSpinnerService } from "ngx-spinner";
import { TodosServicosEScolaresService } from '../../services/all.services';
import { EscolaModel } from '../../model/escola.model';

@Component({
  selector: 'app-lista-escola',
  templateUrl: './lista-escola.component.html',
  styleUrls: ['./lista-escola.component.scss']
})
export class ListaEscolaComponent extends BaseComponent implements OnInit {
  
  escolas : Array<EscolaModel>;

  constructor(protected spinner: NgxSpinnerService
    , private service:TodosServicosEScolaresService
    ) { 
    super(spinner);
  }

  ngOnInit(): void {
    this.loadStart();

    Promise.all([
     this.carregar()
    ]).finally(() => this.loadStop())
  }

  private carregar() : Promise<void>{
    return new Promise((resolve,reject) => {
      this.service.obterEscolas().subscribe(x => {
        this.escolas = x['data'];
        resolve();
      },error => {
        this.errorMensage(error['error']);
        reject();
      })
    });
  }

}
