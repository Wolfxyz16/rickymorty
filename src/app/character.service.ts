import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  URL = "https://rickandmortyapi.com/api"

  constructor(private http: HttpClient) { }

  getCharacters(): Observable{
    return this.http.get<String>(this.URL)
  }
}
