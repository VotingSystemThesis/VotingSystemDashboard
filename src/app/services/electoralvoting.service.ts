import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ElectoralvotingService {
  url = `${environment.hostUrl}/manager/voting`;

  token: string = '';
  constructor(
    private loginService: LoginService,
    private http: HttpClient,
    private router: Router
  ) {
    if (this.loginService.getToken() != null) {
      // @ts-ignore
      this.token = 'Bearer ' + loginService.getToken();
    }
  }

  getAllElectoralVoting(): Observable<any> {
    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(this.url, { headers: corsHeaders });
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
