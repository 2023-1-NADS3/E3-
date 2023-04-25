import { Component } from '@angular/core';
import * as $ from 'jquery' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SlowFu';

  Conectar(){
    $.get("http://localhost:3000/",
      function(resultado)
      {
        console.log(resultado);
      });
  }

  EnviarDados(valor:string)
  {
    var json = {"dado": valor};
    $.post("http://localhost:3000/dado",
    json,
    function (msg)
    {
        console.log(msg);
    });
  }
}
