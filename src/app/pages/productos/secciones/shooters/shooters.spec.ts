import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shooters } from './shooters';

describe('Shooters', () => {
  let component: Shooters;
  let fixture: ComponentFixture<Shooters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shooters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shooters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
