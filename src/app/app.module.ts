import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {provideClientHydration} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { authHttpRequestInterceptor } from './_helper/auth.interceptor';
import { CareerComponent } from './career-module/pages/career/career.component';
import { WelcomeComponent } from './base-components/welcome/welcome.component';
import { NavbarWelcomeComponent } from './base-components/welcome/components/navbar/navbar-welcome.component';
import { FooterComponent } from './base-components/welcome/components/footer/footer.component';
import { CareerModule } from './career-module/module/career.module';
import { AlertModalComponent } from './alerts-module/dialog/alert-modal/alert-modal.component';
import { ErrorAlertDialogComponent } from './alerts-module/dialog/error-alert-dialog/error-alert-dialog.component';
import { SuccessAlertDialogComponent } from './alerts-module/dialog/success-alert-dialog/success-alert-dialog.component';
import { FindJobComponent } from './career-module/pages/find-job/find-job.component';
import { Error404Component } from './error-module/error-pages/error404/error404.component';
import { PrivacePolicePageComponent } from './privace-police-page/privace-police-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    WelcomeComponent,
    FindJobComponent,
    Error404Component,
    PrivacePolicePageComponent,

    // Alerts
    AlertModalComponent,
    ErrorAlertDialogComponent,
    SuccessAlertDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    //My Modules
    CareerModule,

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
    MatCardModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: authHttpRequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
