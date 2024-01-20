import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobComponent } from '../pages/find-job/find-job.component';
import { VagaDePizzaComponent } from '../pages/vaga-de-pizza/vaga-de-pizza.component';
import { VagaOperadorDeInventariosPortoComponent } from '../pages/vaga-operador-de-inventarios-porto/vaga-operador-de-inventarios-porto.component';
import { VagaParaAjudanteDeCozinhaComponent } from '../pages/vaga-para-ajudante-de-cozinha/vaga-para-ajudante-de-cozinha.component';

const routes: Routes = [
  { path: '', redirectTo: 'find-job', pathMatch: 'full' },
  { path: 'find-job', component: FindJobComponent, title: 'Find a job' },
  /*{ path: 'find-job/:category', component: FindJobComponent, title: 'Career' },
  { path: 'apply-now', component: ApplyComponent },*/
  { path: 'vaga-de-emprego-pizzaria-matosinhos/:id', component: VagaDePizzaComponent },
  { path: 'vaga-operador-de-inventarios-porto/:id', component: VagaOperadorDeInventariosPortoComponent },
  { path: 'vaga-para-ajudante-de-cozinha-porto/:id', component: VagaParaAjudanteDeCozinhaComponent },



  //{ path: 'apply-now', component: ApplyComponent, canActivate: [ canActivateApplyJob ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CareerRoutingModule { }
