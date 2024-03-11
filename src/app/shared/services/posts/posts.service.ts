import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  getPosts()  {
    console.log('getPosts');
    return this.http.get<any[]>('https://tejomag.com/wp-json/wp/v2/posts')
  }

  searchPosts(term: string): Observable<any[]> {
    // Replace 'your-api-endpoint' with the actual endpoint to fetch posts
    return this.http.get<any[]>(`your-api-endpoint?search=${term}`);
  }
}
