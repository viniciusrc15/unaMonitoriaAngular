import { TestBed, inject } from '@angular/core/testing';

import { MonitoresService } from './monitores.service';

describe('MonitoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonitoresService]
    });
  });

  it('should be created', inject([MonitoresService], (service: MonitoresService) => {
    expect(service).toBeTruthy();
  }));
});
