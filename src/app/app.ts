import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { Comp } from './feat/comp/comp';
// import { Layout } from './layout/layout';
// import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-v20-features';
}
