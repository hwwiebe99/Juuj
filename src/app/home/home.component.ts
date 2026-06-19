import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('music') musicRef!: ElementRef<HTMLAudioElement>;
  private audioUnlocked: boolean = false;

  ngOnInit() {
    if (this.audioUnlocked) {
      this.musicRef.nativeElement.play();
    }
  }

  ngAfterViewInit() {
    const audio = this.musicRef.nativeElement;
    audio.volume = 0.2;
    audio.play();

    document.addEventListener('click', () => {
    this.audioUnlocked = true;
}, { once: true });
  }
}
