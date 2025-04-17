// src/app/services/chambre.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chambre } from '../models/chambre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://172.23.85.35:8089/foyer/chambre/add-chambre';

  constructor(private http: HttpClient) {}

  addChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(this.apiUrl, chambre);
  }
}
