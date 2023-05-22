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

  constructor(private http: HttpClient, private router: Router) { }


  CriarPost(titulo:string, valor:string, tipo:string, descricao:string) 
  {
    console.log("Passei no primeiro ponto do cadastro");
    let termo = document.getElementById("termo") as HTMLInputElement;

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
      //"data":data,
      //"local":local,
      //emailSalvo:email, 
      //telefoneSalvo:telefone
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
