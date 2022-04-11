import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-quotes',
  templateUrl: './users-quotes.component.html',
  styleUrls: ['./users-quotes.component.css']
})
export class UsersQuotesComponent implements OnInit {

  constructor() { }

  quote: any = {
    quoteId:"1",
    quoteTxt:"opportunity may knock once but temptation leans on the doorbell",
    author:"Mr Inspirational", 
    likes: 0, 
    dislikes: 0, 
    publishDate: "10-04-22"
  }
  
  ngOnInit(): void {
  }

}
