import { Component } from '@angular/core';
import * as $ from 'jquery' ;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil-edicao',
  templateUrl: './perfil-edicao.component.html',
  styleUrls: ['./perfil-edicao.component.css'],
})
export class PerfilEdicaoComponent {

  constructor(private http: HttpClient, private router: Router) { }

  AlterarDados(
    nome: string,
    senhaAtual: string,
    senha: string,
    email: string,
    telefone: string
  ) {
    console.log('Passei no primeiro ponto da altereção');

    $.get(
      'http://localhost:3000/dados_usuario',{},
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
            },
            (res) => {
              console.log('Passei no terceiro ponto da alteração');
              console.log(res);
              console.log('Dados alterados!');
              window.location.href = '/perfil-proprio-usuario';
            }
          );
        }}
      }
    );
  }
}
