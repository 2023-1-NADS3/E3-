import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoPrivacidadeComponent } from './termo-privacidade.component';

describe('TermoPrivacidadeComponent', () => {
  let component: TermoPrivacidadeComponent;
  let fixture: ComponentFixture<TermoPrivacidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermoPrivacidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermoPrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
