import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <header class="brand-name"></header>
      <img src="assets/logo-icon.svg" alt="logo" />
      <section>
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'my-app';
}
