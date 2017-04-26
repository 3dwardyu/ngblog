import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Post } from './post.model';

@Injectable()

export class PostsService {
    private posts: Post[] = [];
    constructor(private http: Http){

    }
    getPosts(){
        return this.http.get('http://localhost:4200/blog/posts')
        .map(res => res.json());
    
    }

    addPost(){
        return

    }
}