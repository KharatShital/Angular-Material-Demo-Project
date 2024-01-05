import { Component, OnInit } from '@angular/core';
import { post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.scss'
})
export class PostlistComponent implements OnInit{
  posts:post[]=[];

  // posts=[
  //   {title:'Angular 13 tutorial',content :'This is Angular Project'},
  //   {title:'Angular 14 tutorial',content :'This is Angular 14 Project'},
  //   {title:'Angular Project',content :'This is Angular Project'},
  //   {title:'Angular 13 tutorial',content :'This is Angular Project'},
  //   {title:'MEAN Stack Project',content :'This is MEAN Stack Project'},
  // ]
  constructor(public ps:PostService){}
  ngOnInit(): void {
    this.posts=this.ps.getAll();
    
  }

}
