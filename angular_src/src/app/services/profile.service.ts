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
  }

  get(): Profile {
    return this.profile;
  }
}
