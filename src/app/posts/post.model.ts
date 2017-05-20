export class Post {
    title: string;
    content: string;
    author: string;
    created_at: string;
    userId?: string;
    postId?: string;
    id?: number;

    constructor(title: string, content: string, author:string, created_at: string, userId?: string, postId?: string, id?: number){
        this.title = title;
        this.content = content;
        this.author = author;
        this.created_at = created_at;
        this.userId = userId;
        this.postId = postId;
        this.id = id;
    }
}