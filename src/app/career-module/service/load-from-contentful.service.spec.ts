import { TestBed } from '@angular/core/testing';

import { LoadFromContentfulService } from './load-from-contentful.service';

describe('LoadFromContentfulService', () => {
  let service: LoadFromContentfulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadFromContentfulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
