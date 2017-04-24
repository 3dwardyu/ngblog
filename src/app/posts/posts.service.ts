import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Post } from './post.model';

@Injectable()

export class PostsService {
    private posts: Post[] = [];
    constructor(private http: Http){

    }
    getPosts(){
        return this.http.get('/blog/posts')
        .map((res: Response) => {
            const posts = res.json().obj;
            let transformedPosts: Post[] = [];
            for (let post of posts) {
                transformedPosts.push(new Post(
                    post.title,
                    post.content,
                    post.author,
                    post.userId,
                    post.postId)
                );
            }
            this.posts = transformedPosts;
            return transformedPosts; 
    })
    }

    addPost(){
        return

    }
}