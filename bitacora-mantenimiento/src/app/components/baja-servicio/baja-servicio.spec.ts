import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaServicio } from './baja-servicio';

describe('BajaServicio', () => {
  let component: BajaServicio;
  let fixture: ComponentFixture<BajaServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BajaServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajaServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
