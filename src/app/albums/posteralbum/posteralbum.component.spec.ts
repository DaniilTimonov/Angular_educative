import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteralbumComponent } from './posteralbum.component';

describe('PosteralbumComponent', () => {
  let component: PosteralbumComponent;
  let fixture: ComponentFixture<PosteralbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteralbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosteralbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
