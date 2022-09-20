import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Votante } from 'src/model/Voter';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  url = `${environment.hostUrl}/voter`;

  constructor(private http: HttpClient) {}

  getAllVoters(): Observable<any> {
    return this.http.get(this.url.toString());
  }
  createVoter(body: any) {
    return this.http.post(this.url, body);
  }
  validateFingerprint(fingerUrl: string) {
    return this.http.get(fingerUrl);
  }
  registerFingerprint(dni: string) {
    return this.http.get(`http://localhost:8080/s3/${dni}/validate/false`, {
      headers: new HttpHeaders({ timeout: `${20000}` }),
    });
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
