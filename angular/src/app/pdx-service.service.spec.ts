import { TestBed, inject } from '@angular/core/testing';

import { PdxServiceService } from './pdx-service.service';

describe('PdxServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PdxServiceService]
    });
  });

  it('should ...', inject([PdxServiceService], (service: PdxServiceService) => {
    expect(service).toBeTruthy();
  }));
});
