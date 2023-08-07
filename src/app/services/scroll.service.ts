import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
