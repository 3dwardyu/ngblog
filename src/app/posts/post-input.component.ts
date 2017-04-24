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

    onSubmit(form: NgForm) {
        const post = new Post(form.value.title, form.value.content, 'Ed');
        this.postsService.addPost(post)
        .subscribe(
            data => console.log(data),
        );
    }
    }


