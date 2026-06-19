import { Component, ElementRef, ViewChild } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private audio: AudioService) {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.audio.play("assets/juuj-home.mp3");
  }
}
