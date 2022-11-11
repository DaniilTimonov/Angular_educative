import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalalbumComponent } from './traditionalalbum.component';

describe('TraditionalalbumComponent', () => {
  let component: TraditionalalbumComponent;
  let fixture: ComponentFixture<TraditionalalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraditionalalbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraditionalalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
