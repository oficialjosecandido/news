import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MockPostsService } from '../shared/services/posts/mock-posts.service';
import { PostsService } from '../shared/services/posts/posts.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  searchTerm: string = '';
  searchResults: any[] = [];
  posts$!: Observable<any[]>;

  constructor( private postsService: PostsService, private mocPostsService: MockPostsService) {}

  ngOnInit() {
    this.posts$ = this.mocPostsService.getPosts();
  }

  searchPosts(term: string) {
    console.log(3333)
    if (term.trim() !== '') {
      this.postsService.searchPosts(term).subscribe((results: any[]) => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
  }

}
