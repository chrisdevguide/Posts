import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetflixButtonComponent } from './components/netflix-button/netflix-button.component';
import { NetflixInputComponent } from './components/netflix-input/netflix-input.component';
import { NetflixProfileSelectionPageComponent } from './components/netflix-profile-selection-page/netflix-profile-selection-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixButtonComponent,
    NetflixInputComponent,
    NetflixProfileSelectionPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
