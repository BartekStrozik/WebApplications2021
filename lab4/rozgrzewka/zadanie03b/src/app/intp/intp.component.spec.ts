import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntpComponent } from './intp.component';

describe('IntpComponent', () => {
  let component: IntpComponent;
  let fixture: ComponentFixture<IntpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
