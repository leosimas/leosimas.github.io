import { Injectable } from '@angular/core';

export class Profile {
  name: string;
  intro: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: Profile;

  constructor() {
    const p = this.profile = new Profile();
    p.name = 'Leonardo Simas Gonçalves';
  }

  get(): Profile {
    return this.profile;
  }
}
