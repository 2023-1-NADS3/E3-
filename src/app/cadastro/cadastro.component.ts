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

  CriarConta(nome:string, senha:string, email:string, telefone:string) {
    console.log("Passei no primeiro ponto do cadastro");
    let termo = document.getElementById("termo") as HTMLInputElement;

    if(termo.checked){
    if(nome.length < 3  || nome.length > 30){
      alert("Seu nome precisa ter entre 3 e 30 caracteres.");
      window.location.href = "/cadastro";
      console.log("Seu nome precisa ter entre 3 e 30 caracteres.");
    }
    else if(senha.length < 6 || senha.length > 12){
      alert("Sua senha precisa ter entre 6 e 12 caracteres.");
      window.location.href = "/cadastro";
      console.log("Sua senha precisa ter entre 6 e 12 caracteres.");
    }
    else if(telefone.length < 11 || telefone.length > 11){
      alert("Escreva um telefone válido com DDD. EX:11 98765-4321");
      window.location.href = "/cadastro";
      console.log("Escreva um telefone válido com DDD. EX:11 98765-4321");
    }
    else{
    $.post("http://localhost:3000/cadastro_usuario", {
      "nome":nome, 
      "senha":senha, 
      "email":email, 
      "telefone":telefone
    }, 
    (res) => {
      console.log("Passei no segundo ponto do cadastro");
      console.log(res);
      if (res === "Email já existe") {
        alert("Esse email já foi cadastrado.");
        window.location.href = "/cadastro";
      }
      else {
        console.log("Usuário adicionado!");
        window.location.href = "/seletor";
      }
    });
    }
    }
    else{
      alert("Você precisa concordar com os Termos de Privacidade.");
      window.location.href = "/";
      console.log("Você precisa concordar com os Termos de Privacidade.");
      window.location.href = "/cadastro";
    }
  }
  
  formValido(): boolean {
    return true;
  }
}
export class AppModule { }