import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { PostsService } from './posts.service';

@Injectable()

export class PostResolve implements Resolve<any>{
    constructor(private postsService: PostsService){
    }
        resolve( route: ActivatedRouteSnapshot) {
            return this.postsService.getPost(route.params['id']);
        }
    
}