import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail.component';
import { PostResolve } from './posts/post.resolve';

const appRoutes: Routes = [
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    {path: 'posts', component: PostsComponent},
    {path: 'posts/:id', component: PostDetailComponent,
        resolve: {
            post: PostResolve
       }
    }
];

export const routing = RouterModule.forRoot(appRoutes);