import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private http: HttpClient) {}

  onSubmit(email: string, password: string) {
    this.http.post('/api/login', { email, password }).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
