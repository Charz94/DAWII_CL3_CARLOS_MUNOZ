import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {


  constructor(private http: HttpClient) { }

  getHumanCharacters() {
    return this.http.get<any>('https://rickandmortyapi.com/api/character')
      .pipe(
        map((response: any) => response.results.filter((character: any) => character.species === 'Human'))
      );
  }

}
