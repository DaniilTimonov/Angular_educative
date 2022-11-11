import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalalbumComponent } from './digitalalbum.component';

describe('DigitalalbumComponent', () => {
  let component: DigitalalbumComponent;
  let fixture: ComponentFixture<DigitalalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalalbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
