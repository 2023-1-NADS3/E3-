import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css'],
})
export class RedefinirSenhaComponent {
  rota = localStorage.getItem('rota');
  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

  constructor(private http: HttpClient, private router: Router) {}

  showPreloader: boolean = true;

  ngOnInit() {
    this.nome = localStorage.getItem('nome');
    this.email = localStorage.getItem('email');
    this.telefone = localStorage.getItem('telefone');
    this.senha = localStorage.getItem('senha');
    this.id = localStorage.getItem('id');
    this.ChecarLogin();
    this.showPreloader = false;
  }

  DeletarUsuario(senhaTest: string) {
    if (this.id != '') {
      this.showPreloader = true;
      if (senhaTest == '' || senhaTest.length == 0) {
        alert('Você precisa inserir sua senha para DELETAR A CONTA.');
        this.showPreloader = false;
      } else {
        if (senhaTest == this.senha) {
          console.log('Função acionada');
          $.post(
            `https://servidorslowfu-api.onrender.com/delete_usuario`,
            { id: this.id },
            (res) => {
              console.log(res);
              alert('Você acaba de deletar seu Usuário PARA SEMPRE.');
              this.showPreloader = false;

              localStorage.setItem('nome', 'nullNome');
              localStorage.setItem('email', 'nullEmail');
              localStorage.setItem('telefone', 'nullTelefone');
              localStorage.setItem('senha', 'nullSenha');
              localStorage.setItem('id', 'nullID');
              this.nome = localStorage.getItem('nome');
              this.email = localStorage.getItem('email');
              this.telefone = localStorage.getItem('telefone');
              this.senha = localStorage.getItem('senha');
              this.id = localStorage.getItem('id');

              window.location.href = '/';
            }
          );
        } else {
          alert('Parece que você digitou a senha errada.');
          this.showPreloader = false;
        }
      }
    } else {
      alert('Você não está logado!');
      window.location.href = '/';
    }
  }

  Cancelar() {
    window.location.href = '/perfil-proprio-usuario';
  }

  ChecarLogin() {
    if (this.id == null || this.id == 'nullID' || this.id == '') {
      console.log('Você não está logado!');
      console.log('O ID salvo é ' + this.id);
      alert('Você não está logado!');
      window.location.href = '/';
    } else {
      console.log('Tudo certo no teste de login ' + this.nome + '!');
    }
  }
}
