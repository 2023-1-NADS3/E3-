import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SeletorComponent } from './seletor/seletor.component';
import { CadastroPostsComponent } from './cadastro-posts/cadastro-posts.component';
import { ChatComponent } from './chat/chat.component';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { PerfilProprioUsuarioComponent } from './perfil-proprio-usuario/perfil-proprio-usuario.component';
import { PerfilOutroUsuarioComponent } from './perfil-outro-usuario/perfil-outro-usuario.component';
import { PerfilEdicaoComponent } from './perfil-edicao/perfil-edicao.component';
import { RedefinirSenhaComponent } from './redefinir-senha/redefinir-senha.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    AppComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    SeletorComponent,
    CadastroPostsComponent,
    ChatComponent,
    ChatHomeComponent,
    PerfilProprioUsuarioComponent,
    PerfilOutroUsuarioComponent,
    PerfilEdicaoComponent,
    RedefinirSenhaComponent,
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    Router
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
