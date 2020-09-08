import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaRoutingModule } from './turma.routing.module';
import { ListaTurmaComponent } from './component/lista-turma/lista-turma.component';

@NgModule({
  declarations: [ListaTurmaComponent],
  imports: [
    CommonModule, TurmaRoutingModule
  ]
})
export class TurmaModule { }
