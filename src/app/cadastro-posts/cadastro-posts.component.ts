import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';

@Component({
  selector: 'app-cadastro-posts',
  templateUrl: './cadastro-posts.component.html',
  styleUrls: ['./cadastro-posts.component.css'],
})
export class CadastroPostsComponent {
  
    constructor(private http: HttpClient, private router: Router) {
    this.dataAtual = new Date();
    this.localizacao = {};
    this.posts = [];
  }

  dataAtual: Date;
  localizacao: any;
  posts: any[];

  ngOnInit(){
    this.SeusPosts();
  }

  exibirPosts(posts: any[]) {
    this.posts = posts;
  }

  obterLocalizacao() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          this.localizacao.latitude = posicao.coords.latitude;
          this.localizacao.longitude = posicao.coords.longitude;
          console.log(this.localizacao);
          // Ou faça o que você precisar com a localização aqui
        },
        (erro) => {
          console.log('Erro ao obter localização:', erro);
        }
      );
    } else {
      console.log('Geolocalização não suportada pelo navegador.');
    }
  }

  //CriarPost(titulo:string, valor:string, tipo:string, descricao:string, data:string, local:string, email:string, telefone:string)
  CriarPost(titulo: string, valor: string, tipo: string, descricao: string) {
    console.log('Passei no primeiro ponto do cadastro');
    let dataFormatada = format(this.dataAtual, 'dd.MM.yy');

    if (titulo.length < 3 || titulo.length > 20) {
      alert('Seu titulo precisa ter entre 3 e 30 caracteres.');
      console.log('Seu titulo precisa ter entre 3 e 30 caracteres.');
    } else if (descricao.length == 0) {
      alert('Você precisa de uma descrição =)');
      console.log('O campo descrição está vazio');
    } else {
      console.log('Passei no segundo ponto do cadastro');
      this.obterLocalizacao();
      $.post(
        'http://localhost:3000/cadastro_post',
        {
          "titulo": titulo,
          "valor": valor,
          "descricao": descricao,
          "tipo": tipo,
          "data": dataFormatada,
          "local": this.localizacao,
        },
        (res) => {
          console.log('Passei no terceiro ponto do cadastro');
          console.log(res);
          window.location.href = '/cadastro-posts';
        }
      );
    }
  }

  SeusPosts() {
    $.get('http://localhost:3000/posts_usuario', {}, (res) => {
      let posts = res;
      this.exibirPosts(posts);
    });
  }
  
  DeletarPost(postID:string){
    $.post('http://localhost:3000/delete_post_usuario', {
      "postID":postID
    }, (res) => {
      console.log(res);
      window.location.href = '/cadastro-posts';
      this.SeusPosts();
    });
  }
}
