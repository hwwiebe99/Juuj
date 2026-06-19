import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('music') musicRef!: ElementRef<HTMLAudioElement>;

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.musicRef.nativeElement.volume = 0.2;
  }
}
