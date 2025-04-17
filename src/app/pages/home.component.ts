import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to Home Page</h1>
    <p>SEO optimized content goes here</p>
    <img src="assets/images/seo-image.webp" alt="SEO Image">
  `
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Home - SEO Angular');
    this.meta.addTags([
      { name: 'description', content: 'This is the home page for SEO Angular example' },
      { property: 'og:title', content: 'Home - SEO Angular' },
      { property: 'og:description', content: 'Learn how to optimize Angular for SEO' },
      { property: 'og:image', content: 'assets/images/seo-image.webp' }
    ]);
  }
}
