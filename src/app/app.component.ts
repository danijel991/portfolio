import { Router } from '@angular/router';
import { Component } from '@angular/core';
import AOS from "aos";
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  public contactElementId: string | null = null;

  ngOnInit(): void {
    AOS.init();
  }

  constructor(public router: Router, private scrollService: ScrollService) {}

}
