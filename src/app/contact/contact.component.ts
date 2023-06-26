import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  isOpen = false;
  isValid = false;
  constructor(private scrollService: ScrollService) {}

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mesageField') mesageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;

  isLoading: boolean = false; // Add this variable
  textInput: string = '';

  model = {
    name: '',
    email: '',
    message: '',
  };

  /**
   * Sends an email using the form data.
   * Disables the form fields and displays a loading animation during the process.
   */
  async sendMail() {

    let nameField = this.nameField.nativeElement;
    let mesageField = this.mesageField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mesageField.disabled = true;
    mailField.disabled = true;
    sendButton.disabled = true;

    this.isLoading = true; // Display the loading animation

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', mailField.value + '\n' + mesageField.value);

    /**
     * Sends the form data to the server for processing.
     * Enables the form fields and stops the loading animation once the request is completed.
     */
    await fetch(
      'https://danijel-savkovic.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    this.isLoading = false;
    nameField.disabled = false;
    mesageField.disabled = false;
    mailField.disabled = false;
    sendButton.disabled = false;
  }

  /**
   * Scrolls the page to the name input field.
   */
  scrollToName() {
    const nameField = this.nameField.nativeElement;
    nameField.focus(); // Set focus to the name input field

    const headerHeight = 125; // Height of the header in pixels
    const topOffset = headerHeight + 20; // Adjust the offset value to leave space for the header

    const rect = nameField.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetTop = rect.top + scrollTop - topOffset;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  }

  checkValidity() {
    const nameField = this.nameField.nativeElement;
    const mesageField = this.mesageField.nativeElement;
    const mailField = this.mailField.nativeElement;
    const sendButton = this.sendButton.nativeElement;

    const isValid =
      nameField.value.trim() !== '' &&
      mesageField.value.trim() !== '' &&
      mailField.value.trim() !== '';

    sendButton.disabled = !isValid;
    console.log(isValid)
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
