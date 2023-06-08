import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showPreloader: boolean = true;
  hideContainer: boolean = false;

  buttonLogin: boolean = false;
  buttonCadastro: boolean = false;

  constructor(){}

  ngOnInit()
  {
    setTimeout(() => {
      this.showPreloader = false;
      this.hideContainer = true;
    }, 3000);
    localStorage.setItem('rota', "localhost:3000");
  }

  Login(){
    this.buttonLogin = true;
    setTimeout(() => {
      window.location.href = '/login';
    }, 1000);
  }

  Cadastro(){
    this.buttonCadastro = true;
    setTimeout(() => {
      window.location.href = '/cadastro';
    }, 1000);
  }
}
