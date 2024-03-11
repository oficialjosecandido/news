import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MockPostsService } from '../shared/services/posts/mock-posts.service';
import { PostsService } from '../shared/services/posts/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonContent)
  content!: IonContent;

  artigos: any;

  constructor(private mocPostsService: MockPostsService, private postService: PostsService) {}

  ngOnInit() {
    this.getArtigos();
  }

  getArtigos() {
    console.log('getArtigos');
    this.postService.getPosts().subscribe((posts)=> {
      console.log(1111, posts);
      this.artigos = posts
    })
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

}
