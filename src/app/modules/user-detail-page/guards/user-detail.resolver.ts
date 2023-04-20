import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserService } from '../../shared/services';
import { IUserDetail } from '../../../models';

export const userDetailResolver: ResolveFn<IUserDetail> = (route, state) => {
  const id = route.paramMap.get('id') ?? '';
  return inject(UserService).getSingleUser(id);
};
