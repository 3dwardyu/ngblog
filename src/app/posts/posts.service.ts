import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Post } from './post.model';


@Injectable()

export class PostsService {
    private posts: Post[] = [];

    constructor(private http: Http){
    }
    
    savePost(post: Post){
        const body = JSON.stringify(post);
        const headers = new Headers ({'Content-Type': 'application/json'});
       return this.http.post('http://localhost:4200/blog/post/', body, {headers: headers})
        .map((response: Response) => {
            const result = response.json();
            const post = new Post(
                result.title,
                result.content,
                result.author,
                result.created_at,
                result._id);
            this.posts.push(post);
            console.log("savePost");
            return post;
        })
        
    }
    getPosts(){
        console.log("getPosts");
        return this.http.get('http://localhost:4200/blog/posts')
        .map(res => res.json());
        
        
    }

    getPost(id: number){
        return this.http.get('http://localhost:4200/blog/post/' + id)
        .map(res => <Post[]>res.json());
    }   

}