import { Injectable } from '@angular/core';
import { Contact, ContactType } from '../views/components/contact-card/contact-card.component';
import { Certification } from '../views/components/certification-card/certification-card.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {
  }

  get(): Promise<Profile> {
    return new Promise<Profile>((resolve, reject) => {
      if ( this.profile ) {
        resolve(this.profile);
        return;
      }

      this.http.get('/assets/json/profile.json').toPromise()
        .then((response) => {
          console.log('profile loaded:, ', response);
          this.profile = response as Profile;
          resolve(this.profile);
        })
        .catch(reject);
    });
  }
}
