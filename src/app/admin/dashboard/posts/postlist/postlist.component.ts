import { Component,OnDestroy, OnInit } from '@angular/core';
import { post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.scss'
})
export class PostlistComponent implements OnInit,OnDestroy{
  posts:post[]=[];
private postSub:Subscription

  constructor(public ps:PostService){}
  ngOnInit(): void {
    this.posts=this.ps.getAll();
    this.postSub=this.ps.getUpdateListner().subscribe((post:post[])=>{
      this.posts=post;
    });
  }
ngOnDestroy(){
  this.postSub.unsubscribe();
}
}
