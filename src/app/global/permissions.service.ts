import { Injectable, inject } from '@angular/core';
import { UserToken } from '../model/permissions/user-token';
import { checkUserID } from '../model/permissions/check-user-id';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class PermissionsService {

  router = inject(Router)

  canActivate( userToken: UserToken ): boolean {

    if( userToken.token() ) return true;

    return false;
  }

  canActivateUser( userToken: UserToken, userID: string | any): boolean{

    if( userToken.token() && checkUserID(userID)) return true;

    this.router.navigate(["/auth/sign-in"])

    return false;
  }

  canMatch(): boolean {
    return true;
  }

}
