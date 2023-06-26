import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {
 constructor(private scrollService: ScrollService, private elementRef: ElementRef, private renderer: Renderer2) {}

 ngOnInit(): void {
  this.scrollService.scrollToTop();
}

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
