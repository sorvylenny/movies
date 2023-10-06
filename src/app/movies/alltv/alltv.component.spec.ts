import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltvComponent } from './alltv.component';

describe('AlltvComponent', () => {
  let component: AlltvComponent;
  let fixture: ComponentFixture<AlltvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltvComponent]
    });
    fixture = TestBed.createComponent(AlltvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
