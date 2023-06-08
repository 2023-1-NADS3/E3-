import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { get } from 'jquery';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent {
  posts: any[] = [];
  currentPostIndex: number = 0;
  numero: string = '';

  constructor(private http: HttpClient) {}

  rota = localStorage.getItem('rota');

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
    this.getPosts();
  }

  getPosts() {
    this.http.get(`http://${this.rota}/todos_posts`).subscribe((res: any) => {
      this.posts = res;
      this.currentPostIndex = this.posts.length - 1;
    });
  }

  proximoPost() {
    this.currentPostIndex--;
    if(this.currentPostIndex < 0)
    {
      this.currentPostIndex = this.posts.length - 1
    }
  }

  Ligar(numero: string) {
    console.log(numero);
    window.location.href = `https://api.whatsapp.com/send?phone=${numero}&text=Esse%20é%20o%20whatsapp%20do%20seu%20novo%20fornecedor!%20Seja%20gentil%20e%20lembre%20de%20contar%20referente%20a%20que%20produto%20você%20está%20entrando%20em%20contato.`;
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
