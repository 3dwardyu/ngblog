export class Post {
    title: string;
    content: string;
    author: string;
    userId?: string;
    postId?: string;

    constructor(title: string, content: string, author:string, userId?: string, postId?: string){
        this.title = title;
        this.content = content;
        this.author = author;
        this.userId = userId;
        this.postId = postId;
    }
}