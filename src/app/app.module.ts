import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetflixButtonComponent } from './components/netflix-button/netflix-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
