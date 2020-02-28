import { TestBed } from '@angular/core/testing';

import { PeopleEffectsService } from './people-effects.service';

describe('PeopleEffectsService', () => {
  let service: PeopleEffectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleEffectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
