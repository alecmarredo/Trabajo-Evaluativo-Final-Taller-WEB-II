import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealidadVirtual } from './realidad-virtual';

describe('RealidadVirtual', () => {
  let component: RealidadVirtual;
  let fixture: ComponentFixture<RealidadVirtual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealidadVirtual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealidadVirtual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
