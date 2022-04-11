import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShareQuoteSectionComponent } from './share-quote-section/share-quote-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShareQuoteSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
