import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarServicio } from './confirmar-servicio';

describe('ConfirmarServicio', () => {
  let component: ConfirmarServicio;
  let fixture: ComponentFixture<ConfirmarServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
