import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-quote-section',
  templateUrl: './user-quote-section.component.html',
  styleUrls: ['./user-quote-section.component.css']
})
export class UserQuoteSectionComponent implements OnInit {

  quote: any = {
    quoteId:"1",
    quoteTxt:"opportunity may knock once but temptation leans on the doorbell",
    author:"Mr Inspirational", 
    likes: 0, 
    dislikes: 0, 
    publishDate: "10-04-22"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
