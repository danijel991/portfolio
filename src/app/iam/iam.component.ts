import { Component } from '@angular/core';

@Component({
  selector: 'app-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.scss']
})
export class IamComponent {
  contactMe() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
