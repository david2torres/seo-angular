import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/" title="Home">Home</a>
      <a routerLink="/about" title="About Us">About</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`nav a { margin: 0 10px; text-decoration: none; color: blue; }`]
})
export class AppComponent { }
