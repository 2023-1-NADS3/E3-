import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  title = 'SlowFu';
  Conectar(){
    $.get("https://servidorslowfu-api.onrender.com/",
      function(resultado)
      {
        console.log(resultado);
      });
  }

  valor="";
  AlterarCampo(valorCaixa:string)
  {
    this.valor=valorCaixa;
  }

  Clicando()
  {
    $.get("http://localhost:3000/todos_usuarios",
    (resultado) =>
    {
      this.valor=JSON.stringify(resultado);
    });
  }
}
