import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [RouterLink],
  templateUrl: './page2.html',
  styleUrl: './page2.css'
})
export class Page2 {
  constructor() {
    console.log('>> loading page2');
  }
}
