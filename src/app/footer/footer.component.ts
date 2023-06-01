import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  buttonCadastro: boolean = false;

  Seletor(){
    this.buttonCadastro = true;
    setTimeout(() => {
      window.location.href = '/seletor';
      this.buttonCadastro = false;
    }, 300);
    
  }

  CadastroPosts(){
    this.buttonCadastro = true;
    setTimeout(() => {
      window.location.href = '/cadastro-posts';
      this.buttonCadastro = false;
    }, 300);
  }

  PerfilProprio(){
    this.buttonCadastro = true;
    setTimeout(() => {
      window.location.href = '/perfil-proprio-usuario';
      this.buttonCadastro = false;
    }, 300);
  }
}
