import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userDetailResolver } from './user-detail.resolver';
import { IUserDetail } from '../../../models';

describe('userDetailResolver', () => {
  const executeResolver: ResolveFn<IUserDetail> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
