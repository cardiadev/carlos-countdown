import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function playerFactory(): any {
  return import('lottie-web');
}


@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    LottieModule.forRoot({ player: playerFactory }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
