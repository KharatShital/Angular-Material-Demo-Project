import { Injectable } from '@angular/core';
import { post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
private posts:post[]=[]
private postUpdate=new Subject<post[]>();


  constructor() { }
  addPost(title:string,content:string,dateTime:any){
    const post:post={title:title,content:content,dateTime:new Date()};
    this.posts.push(post);
  }
  getAll(){
    return [...this.posts]
  }
}
