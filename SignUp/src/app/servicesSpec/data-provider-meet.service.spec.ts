import { TestBed } from '@angular/core/testing';

import { DataProviderMeetService } from '../services/data-provider-meet.service';

describe('DataProviderMeetService', () => {
  let service: DataProviderMeetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataProviderMeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
