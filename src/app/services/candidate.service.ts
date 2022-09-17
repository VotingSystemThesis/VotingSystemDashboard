import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  url = `${environment.hostUrl}/candidate`;

  constructor(private http: HttpClient) {}

  getAllCandidates(): Observable<any> {
    return this.http.get(this.url.toString());
  }

  createCandidate(body: any) {
    return this.http.post(this.url, body);
  }
  updateCandidate(body: any, id: string) {
    return this.http.put(`${this.url}/${id}`, body);
  }
}
