import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { EscolaRoutingModule } from './escola.routing.module';
import { ListaEscolaComponent } from './component/lista-escola/lista-escola.component';
import { CommonModule } from '@angular/common';
import { CommumModule } from 'src/app/common/common.module';
import { CadastroEscolaComponent } from './component/cadastro-escola/cadastro-escola.component';
import { TodosServicosEScolaresService } from './services/all.services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaEscolaComponent, CadastroEscolaComponent],
  imports: [
        
    CommonModule, EscolaRoutingModule, CommumModule,NgxSpinnerModule,FormsModule
  ],
  providers:[TodosServicosEScolaresService]
})
export class EscolaModule { }

