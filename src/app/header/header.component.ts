import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shareQuoteState: boolean = false;
  
  constructor() { }

  shareQuote = ()=>{
    alert("Confirm your quote is not new.")
    this.shareQuoteState = !this.shareQuoteState;
    
  }

  ngOnInit(): void {
  }

}
