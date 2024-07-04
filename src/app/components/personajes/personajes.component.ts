import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../services/rick-morty.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements  OnInit {
  humanCharacters: any[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    this.rickMortyService.getHumanCharacters().subscribe((characters: any[]) => {
      this.humanCharacters = characters;
    });
  }

}
