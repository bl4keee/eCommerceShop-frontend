import { TestBed } from '@angular/core/testing';

import { BartekShopFormService } from './bartek-shop-form.service';

describe('BartekShopFormService', () => {
  let service: BartekShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BartekShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
