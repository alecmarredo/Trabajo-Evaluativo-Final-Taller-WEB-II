import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sigilo } from './sigilo';

describe('Sigilo', () => {
  let component: Sigilo;
  let fixture: ComponentFixture<Sigilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sigilo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sigilo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
