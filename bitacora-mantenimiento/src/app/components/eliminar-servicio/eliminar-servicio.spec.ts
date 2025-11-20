import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarServicio } from './eliminar-servicio';

describe('EliminarServicio', () => {
  let component: EliminarServicio;
  let fixture: ComponentFixture<EliminarServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
