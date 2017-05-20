import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './posts/post-detail.component';
import { PostListComponent } from './posts/post-list.component';
import { PostItemComponent } from './posts/post-item.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { PostsService } from './posts/posts.service';
import { PostResolve } from './posts/post.resolve';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostDetailComponent,
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService, PostResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
