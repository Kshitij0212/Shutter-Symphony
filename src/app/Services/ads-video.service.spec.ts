import { TestBed } from '@angular/core/testing';

import { AdsVideoService } from './ads-video.service';

describe('AdsVideoService', () => {
  let service: AdsVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
