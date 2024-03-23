import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../shared/services/posts/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  postSlug!: string;
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.postSlug = params['postSlug'];
      this.postService.getPostBySlug(this.postSlug).subscribe( 
        data => {
          console.log(data);
          this.post = data[0];
        }
      )
      // You can now use this.postId to fetch and display post details
    });
  }

}
