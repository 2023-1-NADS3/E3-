import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-perfil-proprio-usuario',
  templateUrl: './perfil-proprio-usuario.component.html',
  styleUrls: ['./perfil-proprio-usuario.component.css'],
})
export class PerfilProprioUsuarioComponent implements OnInit {

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.nome = localStorage.getItem('nome');
    this.email = localStorage.getItem('email');
    this.telefone = localStorage.getItem('telefone');
    this.senha = localStorage.getItem('senha');
    this.id = localStorage.getItem('id');
  }

  Sair() {
    console.log('Saindo!');
    this.http.get<any>('http://localhost:3000/sair').subscribe(
      (res) => 
      {
        localStorage.setItem('nome','nullNome');
        localStorage.setItem('email','nullEmail');
        localStorage.setItem('telefone','nullTelefone');
        localStorage.setItem('senha','nullSenha');
        localStorage.setItem('id','nullID');
        this.nome = localStorage.getItem('nome');
        this.email = localStorage.getItem('email');
        this.telefone = localStorage.getItem('telefone');
        this.senha = localStorage.getItem('senha');
        this.id = localStorage.getItem('id');

        console.log(res);
        console.log("Valores finais: " + this.nome, this.email, this.telefone, this.senha, this.id);
        window.location.href = '/';
      },
      (error) => {
        console.log('Ocorreu um erro ao obter os dados do usuário:', error);
      }
    );
  }

  DeletarUsuario(){
    console.log("Função acionada");

    $.post('http://localhost:3000/delete_usuario', {id:this.id}, (res) => {
      console.log(res);
      window.location.href = '/';
    });
  }
}
