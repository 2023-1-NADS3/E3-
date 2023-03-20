import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilOutroUsuarioComponent } from './perfil-outro-usuario.component';

describe('PerfilOutroUsuarioComponent', () => {
  let component: PerfilOutroUsuarioComponent;
  let fixture: ComponentFixture<PerfilOutroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilOutroUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilOutroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
