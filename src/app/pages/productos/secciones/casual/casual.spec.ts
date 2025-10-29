import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Casual } from './casual';

describe('Casual', () => {
  let component: Casual;
  let fixture: ComponentFixture<Casual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Casual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Casual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
