import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @ViewChild('myForm')
  myForm!: ElementRef;

  @ViewChild('nameField')
  nameField!: ElementRef;

  @ViewChild('mesageField')
  mesageField!: ElementRef;

  @ViewChild('sendButton')
  sendButton!: ElementRef;

  @ViewChild('mailField')
  mailField!: ElementRef;

  isLoading: boolean = false; // Add this variable

  model = {
    name:'',
    email:'',
    message:''
  }

  async sendMail() {
    console.log('sending email', this.myForm);

    let nameField = this.nameField.nativeElement;
    let mesageField = this.mesageField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    mesageField.disabled = true;
    mailField.disabled = true;
    sendButton.disabled = true;

    this.isLoading = true; // Display the animation

    // Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', mailField.value + '\n' + mesageField.value);

    // deactivateFields
    await fetch(
      'https://danijel-savkovic.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    // Text anzeigen: Nachricht gesendet
    // dieses true false macht den button grau bis die nachricht gesendet wurde

    this.isLoading = false; // Hide the animation
    nameField.disabled = false;
    mesageField.disabled = false;
    mailField.disabled = false;
    sendButton.disabled = false;
  }

  scrollToName() {
    const nameField = this.nameField.nativeElement;
    nameField.focus(); // Fokussiere das Namenseingabefeld

    const headerHeight = 125; // Höhe des Headers in Pixeln
    const topOffset = headerHeight + 20; // Offset-Wert anpassen, um Platz für den Header zu lassen

    const rect = nameField.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetTop = rect.top + scrollTop - topOffset;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  }
}
