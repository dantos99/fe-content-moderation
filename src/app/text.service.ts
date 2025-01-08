import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  private apiUrl = 'http://localhost:8080/api/moderation/check'
  
  constructor(private http: HttpClient) { }

  sendText(testo: String): Observable<string> {
    return this.http.post<string>(this.apiUrl, { testo }); 
  }
}
