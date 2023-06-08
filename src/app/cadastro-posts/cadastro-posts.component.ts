import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { format } from 'date-fns';
import { map } from 'rxjs/operators';

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
    this.cidade  = "São Paulo-SP";
  }

  rota = localStorage.getItem('rota');

  nome = localStorage.getItem('nome');
  email = localStorage.getItem('email');
  telefone = localStorage.getItem('telefone');
  senha = localStorage.getItem('senha');
  id = localStorage.getItem('id');
  cidade: string;

  dataAtual: Date;
  localizacao: any;
  posts: any[];

  ngOnInit(){
    this.SeusPosts();
    console.log("Bem vindo " + this.nome);
    this.ChecarLogin();
  }

  exibirPosts(posts: any[]) {
    this.posts = posts;
    this.obterLocalizacao();
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

  getCityFromCoordinates(latitude: number, longitude: number) {
    const apiKey = 'AIzaSyBJoo6jHUgNc3a3_0TwYYmJn6EVYWnLr2o';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        if (response && response.results && response.results.length > 0) {
          return response.results[0].formatted_address;
        }
        return null;
      })
    );
  }

  testCriarPost() {
    const valor = "10";
    const tipo = "banana";
    const descricao = "teste de descrição do post";

    this.CriarPost(valor, tipo, descricao);

    // Verificar se o console.log foi chamado corretamente
    // e se os demais passos do cadastro estão corretos.
  }

  //CriarPost(titulo:string, valor:string, tipo:string, descricao:string, data:string, local:string, email:string, telefone:string)
  CriarPost(valor: string, tipo: string, descricao: string) {
    console.log('Passei no primeiro ponto do cadastro');
    let dataFormatada = format(this.dataAtual, 'dd.MM.yy');

    this.getCityFromCoordinates(this.localizacao.latitude, this.localizacao.longitude)
    .subscribe((resultado: string) => {
      console.log("Cheguei no  passo de renomear a localização");
      //this.cidade = resultado;
      console.log(this.cidade);
      console.log(resultado);

      if(this.cidade != ""){
        if (descricao.length == 0) {
          alert('Você precisa de uma descrição =)');
          console.log('O campo descrição está vazio');
        }
        else if (descricao.length > 30){
          alert('Sua descrição não pode passar de 30 caracteres.');
          console.log('O campo descrição está maior que 30 caracteres');
        }
        else {
          console.log('Passei no segundo ponto do cadastro');
          $.post(
            `https://servidorslowfu-api.onrender.com/cadastro_post`,
            {
              "valor": valor,
              "descricao": descricao,
              "tipo": tipo,
              "data": dataFormatada,
              "local": this.cidade,
              "email": this.email,
              "nome": this.nome,
              "telefone": this.telefone,
            },
            (res) => {
              console.log('Passei no terceiro ponto do cadastro');
              console.log(res);
              window.location.href = '/cadastro-posts';
            }
          );
        }
      }
      else{
        alert("Não conseguimos encontrar sua localização =(");
      }
    });
  }

  SeusPosts() {
    $.post(`https://servidorslowfu-api.onrender.com/posts_usuario`, {email:this.email}, (res) => {
      let posts = res;
      console.log("Recebi alguma coisa");
      console.log(res);
      this.exibirPosts(posts);
    });
  }

  DeletarPost(postID:string){
    console.log("Função acionada");
    console.log(postID);

    $.post(`https://servidorslowfu-api.onrender.com/delete_post_usuario`, {
      "postID":postID
    }, (res) => {
      console.log(res);
      window.location.href = '/cadastro-posts';
      this.SeusPosts();
    });
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
