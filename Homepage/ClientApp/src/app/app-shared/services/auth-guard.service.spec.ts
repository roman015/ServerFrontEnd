import { TestBed, inject } from '@angular/core/testing';
import { authGuardService } from './auth-guard.service';


describe('AppShared\authGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [authGuardService]
    });
  });

  it('should be created', inject([authGuardService], (service: authGuardService) => {
    expect(service).toBeTruthy();
  }));
});
