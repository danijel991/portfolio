import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
