import { Component, OnInit, Input } from '@angular/core';
import { Contact, ContactType } from 'src/app/models/contact';

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
