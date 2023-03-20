import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEdicaoComponent } from './perfil-edicao.component';

describe('PerfilEdicaoComponent', () => {
  let component: PerfilEdicaoComponent;
  let fixture: ComponentFixture<PerfilEdicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEdicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
