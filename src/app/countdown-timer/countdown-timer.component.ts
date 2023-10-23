import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit{

  optionsAnimationColombia: AnimationOptions = {
    path: '/assets/colombia-heart.json'
  };

  optionsAnimationFlight: AnimationOptions = {
    path: '/assets/travel-tickets.json'
  };


  targetDate = moment('2023-12-16T23:59:59');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000); // Actualizar cada segundo
  }

  onAnimateColombia(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  onAnimateFlight(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


  updateCountdown() {
    const now = moment();
    const duration = moment.duration(this.targetDate.diff(now));

    this.days = duration.asDays() > 0 ? Math.floor(duration.asDays()) : 0;
    this.hours = duration.hours() > 0 ? duration.hours() : 0;
    this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
    this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
  }
}
