import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaTurmaComponent } from './component/lista-turma/lista-turma.component';

const routes: Routes = [
    { path: '', redirectTo: 'turma', pathMatch: 'full' },
    {path: 'turma', component: ListaTurmaComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class TurmaRoutingModule { }