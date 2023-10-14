import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigNewsComponent } from './big-news/big-news.component';
import { SmallNewsComponent } from './small-news/small-news.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NewsSectionComponent } from './news-section/news-section.component';

@NgModule({
  declarations: [
    AppComponent,
    BigNewsComponent,
    SmallNewsComponent,
    MenuBarComponent,
    NewsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
