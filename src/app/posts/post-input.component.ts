import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { PostsService } from './posts.service';
import { Post } from './post.model';

@Component({
    selector: 'post-input',
    templateUrl: 'post-input.component.html'
})



export class PostInputComponent {
    post: Post;

    constructor(private postsService: PostsService){}


    }


