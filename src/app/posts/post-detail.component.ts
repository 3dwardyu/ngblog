import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component ({
    selector: 'app-post-detail',
    templateUrl: 'post-detail.component.html',
    providers: [ PostsService ]
})

export class PostDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }
    
    @Input()
    post: Post;

    ngOnInit(){
        this.post = this.route.snapshot.data['post'];
    }
}
