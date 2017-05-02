import { Component, Input } from '@angular/core';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component ({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent {
    @Input() post: Post;
    constructor(private postsService: PostsService) {}
}