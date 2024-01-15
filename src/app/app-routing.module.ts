/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: false
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, canActivateApplyJob, canActivateUserGuard } from './guards/can-activate-user.guard';
import { WelcomeComponent } from './base-components/welcome/welcome.component';
import { Error404Component } from './error-module/error-pages/error404/error404.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'career',
    loadChildren: () => import('./career-module/module/career.module').then( m => m.CareerModule),
    canActivate: [ canActivate ]
  },
  { path: '**', component: Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

