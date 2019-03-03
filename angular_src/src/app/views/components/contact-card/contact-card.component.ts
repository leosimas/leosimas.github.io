import { Component, OnInit, Input } from '@angular/core';

export enum ContactType {
  email,
  linkedin,
  github
}
export class Contact {
  type: ContactType;
  text: string;
  constructor(type: ContactType,
    text: string) {
      this.type = type;
      this.text = text;
  }
}

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;
  iconType: string;
  iconName: string;
  url: string;
  text: string;

  constructor() {
  }

  ngOnInit() {
    const c = this.contact;
    switch (c.type) {
      case ContactType.email:
        this.iconType = 'fas';
        this.iconName = 'envelope';
        this.url = 'mailto:' + c.text;
        this.text = 'Email';
        break;
      case ContactType.linkedin:
        this.iconType = 'fab';
        this.iconName = 'linkedin';
        this.url = 'https://linkedin.com/in/' + c.text;
        this.text = 'LinkedIn';
        break;
      case ContactType.github:
        this.iconType = 'fab';
        this.iconName = 'github';
        this.url = 'https://github.com/' + c.text;
        this.text = 'GitHub';
        break;
    }
  }

}
