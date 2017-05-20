import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
    selector: 'app-post-list',
    templateUrl: 'post-list.component.html'
})

export class PostListComponent implements OnInit {
    posts: Post[];

    constructor(private postService: PostsService, private router: Router) {}

    ngOnInit() {
        this.postService.getPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.posts = posts;
                }
            );
    }

    goToPost(post: Post): void {
        let link = ['/posts', post.id];
        this.router.navigate(link);
    }

}