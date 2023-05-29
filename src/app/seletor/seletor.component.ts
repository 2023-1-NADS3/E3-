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

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get('http://localhost:3000/todos_posts').subscribe((res: any) => {
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
}
