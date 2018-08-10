import { Injectable } from '@angular/core';
import { Contact, ContactType } from '../views/components/contact-card/contact-card.component';

export class Profile {
  name: string;
  intro: string;
  title: string;
  contacts: Array<Contact>;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: Profile;

  constructor() {
    const p = this.profile = new Profile();
    p.name = 'Leonardo Simas Gonçalves';
    p.title = 'Mobile Developer';
    p.intro = 'Sou Leonardo, analista de sistemas focado em mobile.'
      + ' Adoro participar de projetos Android e iOS com tecnologias nativas ou híbridas.';
    p.contacts = [
      new Contact(ContactType.email, 'contato@leosimas.com'),
      new Contact(ContactType.linkedin, 'leonardosimas')
    ];
  }

  get(): Profile {
    return this.profile;
  }
}
