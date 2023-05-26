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
  nome: string = '';
  email: string = '';
  telefone: number = 0;
  senha: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.Dados();
  }

  Dados() {
    console.log('Fui acionado');
    this.http.get<any>('http://localhost:3000/dados_usuario').subscribe(
      (res) => {
        this.nome = res[0].nome; // Verifique a estrutura do objeto JSON retornado e ajuste os índices ou propriedades adequadamente
        this.senha = res[0].senha;
        this.email = res[0].email;
        this.telefone = parseInt(res[0].telefone);

        console.log('Trouxe dados!');
        console.log(res);
      },
      (error) => {
        console.log('Ocorreu um erro ao obter os dados do usuário:', error);
      }
    );
  }

  Sair() {
    console.log('Saindo!');
    this.http.get<any>('http://localhost:3000/sair').subscribe(
      (res) => 
      {
        console.log(res);
        window.location.href = '/';
      },
      (error) => {
        console.log('Ocorreu um erro ao obter os dados do usuário:', error);
      }
    );
  }

  DeletarUsuario(){
    console.log("Função acionada");

    $.post('http://localhost:3000/delete_usuario', {}, (res) => {
      console.log(res);
      window.location.href = '/';
    });
  }
}
