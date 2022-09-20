import { TestBed } from '@angular/core/testing';

import { ElectoralvotingService } from './electoralvoting.service';

describe('ElectoralvotingService', () => {
  let service: ElectoralvotingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectoralvotingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
