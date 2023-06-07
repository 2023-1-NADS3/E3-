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

  buttonLogin: boolean = false;

  testCriarConta() {
    const nome = "John Doe";
    const senha = "senha123";
    const email = "johndoe@example.com";
    const telefone = "11234567890";
    
    this.CriarConta(nome, senha, email, telefone);
    
    // Verificar se o console.log foi chamado corretamente
    // e se os demais passos do cadastro estão corretos.
  }

  CriarConta(nome:string, senha:string, email:string, telefone:string) {
    console.log("Passei no primeiro ponto do cadastro");
    let termo = document.getElementById("termo") as HTMLInputElement;

    if(termo.checked){
    if(nome.length < 3  || nome.length > 30){
      alert("Seu nome precisa ter entre 3 e 30 caracteres.");
      console.log("Seu nome precisa ter entre 3 e 30 caracteres.");
    }
    else if(senha.length < 6 || senha.length > 12){
      alert("Sua senha precisa ter entre 6 e 12 caracteres.");
      console.log("Sua senha precisa ter entre 6 e 12 caracteres.");
    }
    else if(telefone.length < 11 || telefone.length > 11){
      alert("Escreva um telefone válido com DDD. EX:11 98765-4321");
      console.log("Escreva um telefone válido com DDD. EX:11 98765-4321");
    }
    else{
      console.log("Passei no segundo ponto do cadastro");
      $.post("http://localhost:3000/cadastro_usuario", {
      "nome":nome, 
      "senha":senha, 
      "email":email, 
      "telefone":telefone
    }, 
    (res) => {
      console.log("Passei no terceiro ponto do cadastro");
      console.log(res);
      if (res === "Email já existe") {
        alert("Esse email já foi cadastrado.");
      }
      else {
        console.log("Usuário adicionado!");
        window.location.href = "/login";
      }
    });
    }
    }
    else{
      alert("Você precisa concordar com os Termos de Privacidade.");
      console.log("Você precisa concordar com os Termos de Privacidade.");
    }
  }
  
  formValido(): boolean {
    return true;
  }

  Login(){
    this.buttonLogin = true;
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  }
}
export class AppModule { }