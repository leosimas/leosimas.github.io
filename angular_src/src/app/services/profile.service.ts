import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  data;

  constructor() {
    this.data = {
      name : 'Leonardo Simas Gonçalves',
      
    }
  }
}
