import { Component } from '@angular/core';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {

  CriarConta(nome:string, senha:string, email:string, telefone:string)
  {
    var json = {
      "nome":nome, 
      "senha":senha, 
      "email":email, 
      "telefone":telefone
    };

    $.post("http://localhost:3000/cadastro_usuario",
    json,
    function (msg)
    {
        console.log(msg);
    });
  }

  formValido(): boolean {
    return true;
  }
}
export class AppModule { }