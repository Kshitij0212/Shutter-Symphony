import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {

  @ViewChild('main') mainDiv: ElementRef | undefined;

  onLoadComplete() {
    this.mainDiv?.nativeElement.classList.remove("pageLoader");
  }
}
