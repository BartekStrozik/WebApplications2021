import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteActorComponent } from './favorite-actor.component';

describe('FavoriteActorComponent', () => {
  let component: FavoriteActorComponent;
  let fixture: ComponentFixture<FavoriteActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
