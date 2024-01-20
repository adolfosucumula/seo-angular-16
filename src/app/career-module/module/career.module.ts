import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CareerRoutingModule } from './career-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavbarWelcomeComponent } from 'src/app/base-components/welcome/components/navbar/navbar-welcome.component';
import { FooterComponent } from 'src/app/base-components/welcome/components/footer/footer.component';
import { VagaDePizzaComponent } from '../pages/vaga-de-pizza/vaga-de-pizza.component';
import { VagaOperadorDeInventariosPortoComponent } from '../pages/vaga-operador-de-inventarios-porto/vaga-operador-de-inventarios-porto.component';
import { VagaParaAjudanteDeCozinhaComponent } from '../pages/vaga-para-ajudante-de-cozinha/vaga-para-ajudante-de-cozinha.component';


@NgModule({
  declarations: [
    NavbarWelcomeComponent,
    FooterComponent,
    VagaDePizzaComponent,
    VagaOperadorDeInventariosPortoComponent,
    VagaParaAjudanteDeCozinhaComponent
  ],
  imports: [
    CommonModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    CareerRoutingModule,

    //---------------------------

    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    CdkScrollable,
    MatTooltipModule,

  ],
  exports: [
    NavbarWelcomeComponent,
    FooterComponent
  ],
})
export class CareerModule { }
