import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import confetti from 'canvas-confetti';
@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  sendWhatsapp() {
    window.location.href = 'https://wa.me/?text=Ya%20falta%20menos%20d%C3%ADas%20para%20verte%20baby%20!';
  }

  faWhatsapp = faWhatsapp;

  optionsAnimationColombia: AnimationOptions = {
    path: '/assets/colombia-heart.json'
  };

  optionsAnimationFlight: AnimationOptions = {
    path: '/assets/travel-tickets.json'
  };

  testDate = moment('2023-12-16T17:35:00');
  targetDate = moment('2024-06-15T23:59:00');
  finalDate = this.targetDate;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  showConfetti: boolean = false;
  confettiLaunched: boolean = false;

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
    const duration = moment.duration(this.finalDate.diff(now));

    if (this.finalDate.isBefore(now)) {
      this.showConfetti = true;
      if (!this.confettiLaunched) {
        this.launchConfetti();
        this.confettiLaunched = true;
      }
    } else {
      this.showConfetti = false;
      this.days = duration.asDays() > 0 ? Math.floor(duration.asDays()) : 0;
      this.hours = duration.hours() > 0 ? duration.hours() : 0;
      this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
      this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
    }
  }

  launchConfetti() {
    const duration = 5 * 500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 60,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 60,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }
}
