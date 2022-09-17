import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
