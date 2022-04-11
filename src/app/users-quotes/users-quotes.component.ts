import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';

@Component({
  selector: 'app-users-quotes',
  templateUrl: './users-quotes.component.html',
  styleUrls: ['./users-quotes.component.css']
})

export class UsersQuotesComponent implements OnInit {

  showQuoteDetailsState: boolean = false; 

  constructor() { }
  // quotes: Quote[] = [];
  quote: any = {
    quoteId:"1",
    quoteTxt:"Life is what happens when you’re busy making other plans.",
    author:"John Lenon", 
    likes: 0, 
    dislikes: 0, 
    publishDate: "10-04-22"
  }
  
  showQuoteDetails=()=>{
    this.showQuoteDetailsState = !this.showQuoteDetailsState;

  }

  ngOnInit(): void {
  }

}
