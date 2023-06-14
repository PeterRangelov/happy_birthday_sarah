import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CluesComponent } from './clues.component';

describe('CluesComponent', () => {
  let component: CluesComponent;
  let fixture: ComponentFixture<CluesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CluesComponent]
    });
    fixture = TestBed.createComponent(CluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
