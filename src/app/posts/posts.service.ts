import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class PostsService {
    constructor(private http: Http){

    }
    getPosts(){
        return this.http.get('/blog/posts')
        .map(res => res.json());
    }
}