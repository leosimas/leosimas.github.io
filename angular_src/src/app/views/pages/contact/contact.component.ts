import { Component, OnInit } from '@angular/core';
import { Contact } from '../../components/contact-card/contact-card.component';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Array<Contact>;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.contacts = this.profile.get().contacts;
  }

}
