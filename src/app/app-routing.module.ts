import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SeletorComponent } from './seletor/seletor.component';
import { CadastroPostsComponent } from './cadastro-posts/cadastro-posts.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { PerfilEdicaoComponent } from './perfil-edicao/perfil-edicao.component';
import { PerfilOutroUsuarioComponent } from './perfil-outro-usuario/perfil-outro-usuario.component';
import { PerfilProprioUsuarioComponent } from './perfil-proprio-usuario/perfil-proprio-usuario.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'seletor', component:  SeletorComponent},
  { path: 'cadastro-posts', component:  CadastroPostsComponent},
  { path: 'perfil-edicao', component:  PerfilEdicaoComponent},
  { path: 'perfil-proprio-usuario', component:  PerfilProprioUsuarioComponent},
  { path: 'perfil-outro-usuario', component:  PerfilOutroUsuarioComponent},
  { path: 'redefinir-senha', component:  RedefinirSenhaComponent},
  { path: 'chat-home', component:  ChatHomeComponent},
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
