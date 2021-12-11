import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../Photo';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts!: Observable<Post[]>;
  photos!: Observable<Photo[]>;

  constructor (private http: HttpClient){
    
  }

  getPosts() : Observable<Post[]> {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
    return this.posts;
  }

  getPhotos() : Observable<Photo[]> {
    this.photos = this.http.get<Photo[]>(this.ROOT_URL + '/photos');
    return this.photos;
  }
}
