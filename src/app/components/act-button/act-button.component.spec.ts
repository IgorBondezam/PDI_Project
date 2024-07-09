import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActButtonComponent } from './act-button.component';

describe('ActButtonComponent', () => {
  let component: ActButtonComponent;
  let fixture: ComponentFixture<ActButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActButtonComponent]
    });
    fixture = TestBed.createComponent(ActButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
