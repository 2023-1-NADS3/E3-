import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPostsComponent } from './cadastro-posts.component';

describe('CadastroPostsComponent', () => {
  let component: CadastroPostsComponent;
  let fixture: ComponentFixture<CadastroPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
