import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>About Us</h1>
    <p>Learn more about us in this SEO optimized page</p>
  `
})
export class AboutComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About Us - SEO Angular');
    this.meta.addTags([
      { name: 'description', content: 'Learn more about us in this SEO optimized page' },
      { property: 'og:title', content: 'About Us - SEO Angular' },
      { property: 'og:description', content: 'Find out who we are and what we do' }
    ]);
  }
}
