import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: {title: string}[] = [
    {title: "Post #1"},
    {title: "Post #2"},
    {title: "Post #3"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
