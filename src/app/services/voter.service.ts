import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Votante } from 'src/model/Voter';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  url = `${environment.hostUrl}/voter`;
  token = '';
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getAllVoters(): Observable<any> {
    this.token = 'Bearer ' + this.loginService.getToken();

    let corsHeaders = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.get(this.url.toString(), { headers: corsHeaders });
  }
  createVoter(body: any) {
    return this.http.post(this.url, body);
  }

  updateVoter(body: any, id: string) {
    return this.http.put(`${this.url}/${id}`, body);
  }

  validateFingerprint(fingerUrl: string) {
    return this.http.get(fingerUrl);
  }
  registerFingerprint(dni: string) {
    return this.http.get(`http://localhost:8080/s3/${dni}/validate/false`, {
      headers: new HttpHeaders({ timeout: `${20000}` }),
    });
  }
  deleteBuffer(dni: string) {
    return this.http.delete(`http://localhost:8080/s3/buffer/${dni}`);
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
