import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'danger-button',
  templateUrl: './danger-button.component.html',
  styleUrls: ['./danger-button.component.scss']
})
export class DangerButtonComponent {
  @Input('message') message: string = 'hehe';
  @Input('color') color: string = '';
  buttonPages: string[] = ['', 'https://google.com'];
  constructor(private router: Router) {
    
  }
  ngOnInit(): void {
    console.log('Component initialized');
    console.log('Input value:', this.message);
  }
  redirect() {
    let sel = this.buttonPages[Math.floor(Math.random() * this.buttonPages.length)];
    if(sel.includes("https://"))
    {
      window.location.href = sel;
    }
    else{
      this.router.navigate([sel]);
    }
  }
}
