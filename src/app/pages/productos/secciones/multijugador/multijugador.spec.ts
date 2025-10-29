import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multijugador } from './multijugador';

describe('Multijugador', () => {
  let component: Multijugador;
  let fixture: ComponentFixture<Multijugador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multijugador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multijugador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
