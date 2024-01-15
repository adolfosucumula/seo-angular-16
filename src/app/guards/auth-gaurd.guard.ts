import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { PermissionsService } from '../global/permissions.service';
import { Injectable, inject } from '@angular/core';
import { UserToken } from '../model/permissions/user-token';
import { SessionService } from '../global/session.service';

/*@Injectable({
  providedIn: "root",
})

export class authenticationGuard implements CanActivate {

  constructor(private route: Router, private session: SessionService){

  }

  canActivate(){
    return true;
  }
}*/


