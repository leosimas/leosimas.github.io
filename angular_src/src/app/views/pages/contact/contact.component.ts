import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Array<Contact>;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
    this.profile.get().then((profile) => {
      this.contacts = profile.contacts;
    });
  }

}
