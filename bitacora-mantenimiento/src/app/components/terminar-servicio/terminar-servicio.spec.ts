import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarServicio } from './terminar-servicio';

describe('TerminarServicio', () => {
  let component: TerminarServicio;
  let fixture: ComponentFixture<TerminarServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminarServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminarServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
