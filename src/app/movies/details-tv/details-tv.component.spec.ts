import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTvComponent } from './details-tv.component';

describe('DetailsTvComponent', () => {
  let component: DetailsTvComponent;
  let fixture: ComponentFixture<DetailsTvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTvComponent]
    });
    fixture = TestBed.createComponent(DetailsTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
