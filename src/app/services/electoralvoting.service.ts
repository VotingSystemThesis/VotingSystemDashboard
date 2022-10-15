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
  corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  url = `${environment.hostUrl}/manager/voting`;
  graphicUrl = `${environment.hostUrl}/manager/graphic`;
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

  createElection(body: any) {
    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.post(this.url, body, { headers: corsHeaders });
  }
  editElection(body: any, id: string) {
    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.put(`${this.url}/${id}`, body, {
      headers: corsHeaders,
    });
  }
  deleteElection(id: string) {
    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.delete(`${this.url}/${id}`, {
      headers: corsHeaders,
    });
  }
  //Graphics
  findVotedCountByElection(id: string) {
    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(`${this.graphicUrl}/electoral/voting/${id}`, {
      headers: corsHeaders,
    });
  }
  findVotedCountByCandidate(id: string) {
    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(`${this.graphicUrl}/candidate/${id}`, {
      headers: corsHeaders,
    });
  }
}
