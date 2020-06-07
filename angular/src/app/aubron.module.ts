import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './aubron.components';
import { IntroComponent } from './intro/intro.component';
import { ScoreshotsComponent } from './scoreshots/scoreshots.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ScoreshotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
