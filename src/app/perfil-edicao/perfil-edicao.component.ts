import { Component } from '@angular/core';
import * as $ from 'jquery' ;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-edicao',
  templateUrl: './perfil-edicao.component.html',
  styleUrls: ['./perfil-edicao.component.css'],
})
export class PerfilEdicaoComponent{

  constructor(private http: HttpClient, private router: Router) { }

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

  ngOnInit() {
    this.nome = localStorage.getItem('nome');
    this.email = localStorage.getItem('email');
    this.telefone = localStorage.getItem('telefone');
    this.senha = localStorage.getItem('senha');
    this.id = localStorage.getItem('id');
    this.ChecarLogin();
  }

  AlterarDados(
    nome: string,
    senhaAtual: string,
    senha: string,
    email: string,
    telefone: string,
  ) {
    console.log('Passei no primeiro ponto da altereção');

    $.post(
      'http://localhost:3000/dados_usuario',{email:localStorage.getItem("email")},
      (res) => {
        console.log('Passei no check da senha.');
        console.log(res);
        console.log(res[0].senha);
        
        if(senhaAtual != res[0].senha){
          console.log("A senha atual foi digitada errada.");
          alert('Parece que você digitou sua senha atual errado. Tente de novo.');
        }
        else{    
          if (nome.length < 3 || nome.length > 30) {
          alert('Seu nome precisa ter entre 3 e 30 caracteres.');
          console.log('Seu nome precisa ter entre 3 e 30 caracteres.');
        } else if (senha.length < 6 || senha.length > 12) {
          alert('Sua senha precisa ter entre 6 e 12 caracteres.');
          console.log('Sua senha precisa ter entre 6 e 12 caracteres.');
        } else if (telefone.length < 11 || telefone.length > 11) {
          alert('Escreva um telefone válido com DDD. EX:11 98765-4321');
          console.log('Escreva um telefone válido com DDD. EX:11 98765-4321');
        } else {
          console.log('Passei no segundo ponto da alteração');
          $.post(
            'http://localhost:3000/alterar_dados_usuario',
            {
              nome: nome,
              senha: senha,
              email: email,
              telefone: telefone,
              id:this.id
            },
            (res) => {
              console.log('Passei no terceiro ponto da alteração');
              console.log(res);
              console.log('Dados alterados!');
              localStorage.setItem('nome', res[0].nome);
              localStorage.setItem('senha', res[0].senha);
              localStorage.setItem('email', res[0].email);
              localStorage.setItem('telefone', res[0].telefone);
              window.location.href = '/perfil-proprio-usuario';
            }
          );
        }}
      }
    );
  }

  ChecarLogin(){
    if (this.id == null || this.id == "nullID" || this.id == ""){
      console.log("Você não está logado!");
      console.log("O ID salvo é " + this.id);
      alert("Você não está logado!");
      window.location.href = '/';
    }
    else{
      console.log("Tudo certo no teste de login " + this.nome + "!");
    }
  }
}
