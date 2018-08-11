import { Injectable } from '@angular/core';
import { Contact, ContactType } from '../views/components/contact-card/contact-card.component';
import { Certification } from '../views/components/certification-card/certification-card.component';

export class Profile {
  pageTitle: string;
  name: string;
  fullName: string;
  intro: string;
  title: string;
  contacts: Array<Contact>;
  certifications: Array<Certification>;
  formation: Array<Graduation>;
  roles: Array<{title: string, text: string}>;
  jobs: Array<{}>;
  skills: Array<{}>;
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
    p.pageTitle = 'Leonardo Simas';
    p.name = 'Leonardo';
    p.fullName = 'Leonardo Simas Gonçalves';
    p.title = 'Mobile Developer';
    p.intro = 'Sou Leonardo, analista de sistemas focado em mobile.'
      + ' Adoro participar de projetos Android e iOS com tecnologias nativas ou híbridas.';
    p.roles = [
      {
        title : 'Analista de Sistemas - Mobile',
        text : 'Experiência na atuação como líder técnico e tutor de equipes mobiles.'+
          ' Experiência em análise e desenvolvimento de aplicações móveis, além de elaboração de arquitetura das soluções.'+
          ' Desenvolvimento de soluções nativas para Android, iOS e Windows Phone, integração a serviços Web, Android NDK e personalização do sistema operacional Android.'+
          ' Desenvolvimento em tecnologias híbridas: Ionic, Cordova e IBM MobileFirst, para Android, iOS e Windows Phone.'
      }
    ];
    p.contacts = [
      new Contact(ContactType.email, 'contato@leosimas.com'),
      new Contact(ContactType.linkedin, 'leonardosimas')
    ];
    p.certifications = [
      new Certification('Associate Android Developer', 'Google Certified', 'android', 'https://www.credential.net/r358j69n'),
      new Certification('iOS Developer Nanodegree', '', 'udacity', '/assets/certifications/ios_nanodegree_leo.pdf')
    ];
    p.formation = [
      new Graduation(2013, 'Bacharelado em Sistemas de Informação', 'UNEB - Universidade do Estado da Bahia')
    ];
    p.jobs = [
      { title: 'Analista de Sistemas Sênior', company:'Capgemini', period: '2017 - atual', current: true },
      { title: 'Analista de Sistemas Pleno', company:'Capgemini', period: '2014 - 2017' },
      { title: 'Analista de Sistemas Júnior', company:'MTM Tecnologia', period: '2014' },
      { title: 'Programador', company:'SENAI', period: '2013 - 2014' },
      { title: 'Programador', company:'CPTec - UNEB', period: '2012 - 2013' },
      { title: 'Programador', company:'Instituto Recôncavo de Tecnologia', period: '2011 - 2012' },
      { title: 'Estagiário', company:'Instituto Recôncavo de Tecnologia', period: '2010 - 2011' },
      { title: 'Desenvolvedor', company:'Consult Jr. - UNEB', period: '2008 - 2010' }
    ];
    p.skills = [
      {
        category: 'Mobile',
        list : [
          { name: 'Android', value : 90 },
          { name: 'iOS', value : 70 },
          { name: 'Ionic', value : 50 }
        ]
      },
      {
        category: 'Programação',
        list : [
          { name: 'Java', value : 90 },
          { name: 'Swift', value : 75 },
          { name: 'JavaScript', value : 70 },
          { name: 'TypeScript', value : 50 }
        ]
      }
    ];
  }

  get(): Profile {
    return this.profile;
  }
}
