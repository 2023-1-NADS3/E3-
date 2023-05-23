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
}
