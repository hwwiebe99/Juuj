import { Component, ElementRef, ViewChild } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { Newsletter } from '../models/Newsletter';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newsletters: Newsletter[] = [];

  nlLoadCount: number = 0;
  nlLoadAmount: number = 5;

  today: string = new Date().toISOString().split('T')[0];

  constructor(private audio: AudioService, private nlService: NewsletterService) {}

  ngOnInit() {
    this.loadNewsletters();
  }

  ngAfterViewInit() {
    
  }

  loadNewsletters() {
    this.nlService.getNewsletters(this.nlLoadCount, this.nlLoadAmount).subscribe({
      next: (results) => {
        this.newsletters.push(...results);

        this.nlLoadCount += results.length;
      },
      error: () => {
        console.log("Error fetching newsletters.");
      }
    })
  }

  
}
