import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})

export class SeletorComponent {
  constructor(private http: HttpClient, private router: Router) {this.posts = [];}

  posts: any[];

  ngOnInit(){
    this.Posts();
  }

  exibirPosts(posts: any[]) {
    this.posts = posts;
  }

  Posts() {
    $.get('http://localhost:3000/todos_posts', {}, (res) => {
      let posts = res;
      this.exibirPosts(posts);
    });
  }

  Ligar(numero:string, nome:string)
  {
    console.log(numero);
    console.log(nome);
    window.location.href = "https://api.whatsapp.com/send?phone="+{numero}+"&text=Esse%20é%20o%20whatsapp%20do%20seu%20novo%20fornecedor!%20Seja%20gentil%20e%20lembre%20de%20contar%20referente%20a%20que%20produto%20você%20está%20entrando%20em%20contato.";
  }
}
