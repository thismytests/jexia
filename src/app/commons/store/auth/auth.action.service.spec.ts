import {
  TestBed,
  inject
} from '@angular/core/testing';

// tested store
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';

// tested entity
import {AuthActionService} from './auth.action.service';

describe('AuthActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgReduxTestingModule
      ],
      providers: [AuthActionService]
    });
  });

  it('should be created', inject([AuthActionService], (service: AuthActionService) => {
    expect(service).toBeTruthy();
  }));
});
