import {
  TestBed,
  inject
} from '@angular/core/testing';

// mock redux
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';

// tested service
import {ExampleActionService} from './example.action.service';

describe('ExampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxTestingModule],
      providers: [ExampleActionService]
    });
  });

  it('should be created', inject([ExampleActionService], (service: ExampleActionService) => {
    expect(service).toBeTruthy();
  }));
});
