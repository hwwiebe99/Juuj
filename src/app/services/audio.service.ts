import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioService {
  private audio = new Audio();
  private unlocked = false;

  constructor() {
    document.addEventListener('click', () => {
      this.unlocked = true;
    }, { once: true });
  }

  play(src: string, volume = 1) {
    if (!this.unlocked) return;

    this.audio.pause();
    this.audio.currentTime = 0;

    this.audio.src = src;
    this.audio.volume = volume;

    this.audio.load();

    this.audio.play().catch(() => {
      console.log("audio error")
    });
  }

  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}