import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = `${environment.hostUrl}/user/login`;
  constructor(private http: HttpClient) {}
  authenticate(body: any) {
    return this.http.post(this.url, body);
  }
  isAuthenticated() {
    return true;
  }
}
