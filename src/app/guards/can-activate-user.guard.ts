import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PermissionsService } from '../global/permissions.service';
import { UserToken } from '../model/permissions/user-token';

export const canActivate: CanActivateFn = (route, state) => {
  const router = inject(Router)

  if(inject(PermissionsService).canActivate(inject(UserToken))){
    return true;
  }

  return false
};

export const canActivateUserGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivateUser(inject(UserToken), route.params['token']);
  const currentUser = inject(UserToken)
  const permission = inject(PermissionsService)
  const router = inject(Router)

  //if(permission.canActivateUser(currentUser, "12")){
    //return true;
  //}

  //router.navigate(["/auth/sign-up"])

  //return false
};

export const canActivateApplyJob: CanActivateFn = (route, state) => {
  // Must open a Popup asking to make login or create an account

  return inject(PermissionsService).canActivateUser(inject(UserToken), route.params['token']);
  const currentUser = inject(UserToken)
  const permission = inject(PermissionsService)
  const router = inject(Router)

  //if(permission.canActivateUser(currentUser, "12")){
    //return true;
  //}

  //router.navigate(["/auth/sign-up"])

  //return false
};

