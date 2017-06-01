import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from './posts.service';
import { Post } from './post.model';

@Component({
    selector: 'app-post-add',
    templateUrl: 'post-add.component.html',
    styles: [],
    providers: [ PostsService ]
})

export class PostAddComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postsService: PostsService){}

    onSubmit(form: NgForm){
        var result;
        let post = new Post(form.value.title, form.value.content, 'Edward', '05/20/17', "2"); 
        result = this.postsService.savePost(post);
        result.subscribe( x => {
            this.posts.push(post);
            console.log("onsubmit");
            });
        form.resetForm();
    }     
    ngOnInit(){
        console.log("oninit post-add");
    }
}
