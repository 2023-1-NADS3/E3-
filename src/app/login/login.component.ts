import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) { }

  Login(email:string, senha:string)
  {
      var json = {
          "email":email, 
          "senha":senha
      };
  
      this.http.post("http://localhost:3000/login", json).subscribe(
          (res:any) =>
          {
              console.log(res);
              if(res.validado)
              {
                  this.router.navigate(['/seletor']);
              }
              else
              {
                  alert("Senha incorreta.");
              }
          },
          (error:any) =>
          {
              console.log(error);
          }
      );
  }

  formValido(): boolean {
    return true;
  }
}
