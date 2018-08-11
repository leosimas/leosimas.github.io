import { Injectable } from '@angular/core';
import { Contact, ContactType } from '../views/components/contact-card/contact-card.component';
import { Certification } from '../views/components/certification-card/certification-card.component';

export class Profile {
  name: string;
  intro: string;
  title: string;
  contacts: Array<Contact>;
  certifications: Array<Certification>;
  formation: Array<Graduation>;
}

export class Graduation {
  title: string;
  institute: string;
  year: number;
  constructor(year: number,
    title: string,
    institute: string) {
      this.title = title;
      this.institute = institute;
      this.year = year;
  }
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
    p.certifications = [
      new Certification('Associate Android Developer', 'Google Certified', 'android'),
      new Certification('iOS Developer Nanodegree', '', 'udacity')
    ];
    p.formation = [
      new Graduation(2013, 'Bacharelado em Sistemas de Informação', 'UNEB - Universidade do Estado da Bahia')
    ];
  }

  get(): Profile {
    return this.profile;
  }
}
