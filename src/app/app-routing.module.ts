import { EscolaModule } from './core/instituicao/escola/escola.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: "/home" , pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'escola', loadChildren: () => import('../app/core/instituicao/escola/escola.module').then(m => m.EscolaModule)},
  {path: 'turma', loadChildren: () => import('../app/core/instituicao/turma/turma.module').then(m => m.TurmaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
