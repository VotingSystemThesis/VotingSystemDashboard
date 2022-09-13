import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Votante } from 'src/model/Voter';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  url = `${environment.hostUrl}/voters`;

  constructor(private http: HttpClient) {}

  getAllVoters(): Observable<any> {
    return this.http.get(this.url.toString());
  }
}
