import { Component, OnInit } from '@angular/core';
import { PostService } from './postlist/post.service';
import { NgForm } from '@angular/forms';
import { FormStyle } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  constructor(private ps:PostService){}
  ngOnInit(){

  }
onPostData(form:NgForm){
  if(!form.invalid){
  this.ps.addPost(form.value.title,form.value.content,form.value.dateTime);
  form.resetForm();
}
else{
  return 
}
}
}
