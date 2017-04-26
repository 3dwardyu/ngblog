import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './posts/post.component';
import { PostListComponent } from './posts/post-list.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderComponent } from './header.component';
import { routing } from './app.routing';
import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
