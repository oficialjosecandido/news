import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockPostsService {

  constructor() { }

  // change any by Post model or interface
  getPosts(): Observable<any[]> {
    // Define your mock data here
    const mockPosts: any[] = [
      { id: 1, title: 'Post 1', content: 'Content of Post 1' },
      { id: 2, title: 'Post 2', content: 'Content of Post 2' },
      { id: 3, title: 'Post 3', content: 'Content of Post 3' }
      // Add more mock posts as needed
    ];

    return of(mockPosts);
  }
}
