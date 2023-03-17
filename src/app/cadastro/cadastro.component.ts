import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {

  criarConta() {
    if (this.formValido()) {
      // Enviar os dados para o backend
    }
  }

  formValido(): boolean {
    return true;
  }
}
export class AppModule { }