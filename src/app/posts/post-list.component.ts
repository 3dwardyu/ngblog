import { Component, OnInit } from "@angular/core";

import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.component.html'
})
export class PostListComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostsService) {}

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts;
                }
            );
    }
}