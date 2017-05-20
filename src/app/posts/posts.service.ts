import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { Post } from './post.model';


@Injectable()

export class PostsService {
    private posts: Post[];

    constructor(private http: Http){

    }
    getPosts(): Observable<Post[]>{
        return this.http.get('http://localhost:4200/blog/posts')
        .map(res => <Post[]>res.json());
    }

    getPost(id: number){
        return this.http.get('http://localhost:4200/blog/posts/' + id)
        .map(res => <Post[]>res.json());
    }   

    addPost(){
        return null

    }
}