import { Component } from '@angular/core';
import * as $ from 'jquery' ;
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TermoPrivacidadeComponent } from '../termo-privacidade/termo-privacidade.component';

@Component({
  selector: 'app-cadastro-posts',
  templateUrl: './cadastro-posts.component.html',
  styleUrls: ['./cadastro-posts.component.css']
})
export class CadastroPostsComponent {

  constructor(private http: HttpClient, private router: Router) 
  { 
    this.dataAtual = new Date(); 
    this.localizacao = {};
  }

  dataAtual: Date;
  localizacao: any;

  obterLocalizacao() {
    
  }

  //CriarPost(titulo:string, valor:string, tipo:string, descricao:string, data:string, local:string, email:string, telefone:string) 
  CriarPost(titulo:string, valor:string, tipo:string, descricao:string) 
  {
    console.log("Passei no primeiro ponto do cadastro");

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

    if(titulo.length < 3  || titulo.length > 20){
      alert("Seu titulo precisa ter entre 3 e 30 caracteres.");
      console.log("Seu titulo precisa ter entre 3 e 30 caracteres.");
    }
    else if(descricao.length == 0){
      alert("Você precisa de uma descrição =)");
      console.log("O campo descrição está vazio");
    }
    else{
      console.log("Passei no segundo ponto do cadastro");
      $.post("http://localhost:3000/cadastro_usuario", {
      "titulo":titulo, 
      "valor":valor,
      "descricao":descricao, 
      "tipo":tipo,
      "data":this.dataAtual,
      "local":this.localizacao,
    }, 
    (res) => {
      console.log("Passei no terceiro ponto do cadastro");
      console.log(res);
      window.location.href = "/cadastro-posts";
    });
    }
  }

  SeusPost()
  {
      
  }
}
