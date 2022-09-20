import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAuth = false;
  url = `${environment.hostUrl}/user/login`;
  constructor(private http: HttpClient, private router: Router) {}
  authenticate(body: any) {
    return this.http.post(this.url, body);
  }
  isAuthenticated() {
    if (localStorage.getItem('token')!.length > 0) this.isAuth = true;
    else this.isAuth = false;
    return this.isAuth;
  }
  handleToken(token: string) {
    localStorage.setItem('token', token);
    this.isAuth = true;
    this.router.navigate(['/home']);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
