import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getCommentsWithGarfieldBiz() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/comments')
      .pipe(
        map((comments: any[]) => comments.filter(comment => comment.email.includes('garfield.biz')))
      );
  }


}
