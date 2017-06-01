import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

import { Post } from './post.model';

@Component({
    selector: 'app-post-item',
    templateUrl: 'post-item.component.html'
})

export class PostItemComponent {

    @Input() post: Post[];
    @Input() index: number;

    }
