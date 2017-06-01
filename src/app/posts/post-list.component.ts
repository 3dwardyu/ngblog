import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from "./post.model";
import { PostsService } from "./posts.service";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.component.html',
    providers: [ PostsService ]
})

export class PostListComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostsService, private router: Router) {}

    ngOnInit(){
        this.postService.getPosts()
            .subscribe(
                posts => {
                    this.posts = posts;
                }
            );
    }
}