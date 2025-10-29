import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Puzle } from './puzle';

describe('Puzle', () => {
  let component: Puzle;
  let fixture: ComponentFixture<Puzle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Puzle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Puzle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
