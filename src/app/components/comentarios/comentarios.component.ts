import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';
@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {
  filteredComments: any[] = [];

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getCommentsWithGarfieldBiz().subscribe((comments: any[]) => {
      this.filteredComments = comments;
    });
  }
}
