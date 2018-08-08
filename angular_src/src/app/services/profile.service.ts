import { Injectable } from '@angular/core';

export class Profile {
  name: string;
  intro: string;
  title: string;
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
    
  }

  get(): Profile {
    return this.profile;
  }
}
