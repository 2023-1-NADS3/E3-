import { Component } from '@angular/core';
import * as $ from 'jquery' ;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {

  constructor(private http: HttpClient, private router: Router) { }
  emailJaExiste = false;

  CriarConta(nome:string, senha:string, email:string, telefone:string)
  {
      console.log("Passei no primeiro ponto do cadastro");
      var json = {
        "nome":nome, 
        "senha":senha, 
        "email":email, 
        "telefone":telefone
      };
      
      console.log("Passei no segundo ponto do cadastro");
      $.post("http://localhost:3000/cadastro_usuario", json, (res) => // Usa arrow function
      {
        console.log("Passei no terceiro ponto do cadastro");
        console.log(res);
        if (res === "Email já existe") {
          this.emailJaExiste = true;
        } else {
          console.log("Usuário adicionado!");
          this.router.navigate(['/seletor']);// Usa a referência ao objeto atual
        }
    });
  }
  
  formValido(): boolean {
    return true;
  }
}
export class AppModule { }