import { TestBed } from '@angular/core/testing';

import { PressupostService } from './pressupost.service';

describe('PtoService', () => {
  let service: PressupostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PressupostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
