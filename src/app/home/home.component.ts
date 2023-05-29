import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  showPreloader: boolean = true;
  hideContainer: boolean = false;

  constructor(){}

  ngOnInit()
  {
    setTimeout(() => {
      this.showPreloader = false;
      this.hideContainer = true;
    }, 3000);
  }
  
}