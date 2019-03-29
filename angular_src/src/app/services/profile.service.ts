import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';

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
