import { Injectable } from '@angular/core';
import { Contact, ContactType } from '../views/components/contact-card/contact-card.component';
import { Certification } from '../views/components/certification-card/certification-card.component';

export class Profile {
  name: string;
  fullName: string;
  intro: string;
  title: string;
  contacts: Array<Contact>;
  certifications: Array<Certification>;
  formation: Array<Graduation>;
  roles: Array<{title: string, text: string}>;
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
    p.name = 'Leonardo';
    p.fullName = 'Leonardo Simas Gonçalves';
    p.title = 'Mobile Developer';
    p.intro = 'Sou Leonardo, analista de sistemas focado em mobile.'
      + ' Adoro participar de projetos Android e iOS com tecnologias nativas ou híbridas.';
    p.roles = [
      {
        title : 'Analista de Sistemas - Mobile',
        text : 'Experiência na atuação como líder técnico e tutor de equipes mobiles.'+
          'Experiência em análise e desenvolvimento de aplicações móveis, além de elaboração de arquitetura das soluções.'+
          'Desenvolvimento de soluções nativas para Android, iOS e Windows Phone, integração a serviços Web, Android NDK e personalização do sistema operacional Android.'+
          'Desenvolvimento em tecnologias híbridas: Ionic, Cordova e IBM MobileFirst, para Android, iOS e Windows Phone.'
      }
    ];
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
