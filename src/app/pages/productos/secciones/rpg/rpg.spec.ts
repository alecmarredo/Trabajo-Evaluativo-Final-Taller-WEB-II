import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rpg } from './rpg';

describe('Rpg', () => {
  let component: Rpg;
  let fixture: ComponentFixture<Rpg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rpg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rpg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
