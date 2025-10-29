import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantasia } from './fantasia';

describe('Fantasia', () => {
  let component: Fantasia;
  let fixture: ComponentFixture<Fantasia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fantasia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fantasia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
