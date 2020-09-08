import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaEscolaComponent } from './component/lista-escola/lista-escola.component';
import { CadastroEscolaComponent } from './component/cadastro-escola/cadastro-escola.component';

const routes: Routes = [
    { path: '', redirectTo: 'escola', pathMatch: 'full' },
    {path: 'escola', component: ListaEscolaComponent },
    {path: 'escola-cadastro', component: CadastroEscolaComponent },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class EscolaRoutingModule { }