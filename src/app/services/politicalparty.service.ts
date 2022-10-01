import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PoliticalpartyService {
  corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  constructor(private http: HttpClient) {}
  url = `${environment.hostUrl}/party`;

  getAllPolliticalParty(): Observable<any> {
    return this.http.get(this.url.toString());
  }

  createPolliticalParty(body: any) {
    return this.http.post(this.url, body);
  }
  editPolliticalParty(body: any, id: string) {
    return this.http.put(`${this.url}/${id}`, body, {
      headers: this.corsHeaders,
    });
  }
  deletePolliticalParty(id: string) {
    return this.http.delete(`${this.url}/${id}`, {
      headers: this.corsHeaders,
    });
  }
}
