import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordComponent } from './crossword.component';

describe('CrosswordComponent', () => {
  let component: CrosswordComponent;
  let fixture: ComponentFixture<CrosswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrosswordComponent]
    });
    fixture = TestBed.createComponent(CrosswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
