import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProprioUsuarioComponent } from './perfil-proprio-usuario.component';

describe('PerfilProprioUsuarioComponent', () => {
  let component: PerfilProprioUsuarioComponent;
  let fixture: ComponentFixture<PerfilProprioUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilProprioUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilProprioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
