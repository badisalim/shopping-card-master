import { TestBed } from '@angular/core/testing';

import { ProductsService } from './invoice.service';

describe('InvoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
