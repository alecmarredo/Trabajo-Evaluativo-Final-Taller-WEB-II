import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoAbierto } from './mundo-abierto';

describe('MundoAbierto', () => {
  let component: MundoAbierto;
  let fixture: ComponentFixture<MundoAbierto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MundoAbierto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MundoAbierto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
