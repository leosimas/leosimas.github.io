import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class MenuItem {
  text: string;
  path: string;
  constructor(path: string, text: string) {
    this.path = path;
    this.text = text;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private items: Array<MenuItem>;

  constructor(private router: Router) {
    this.items = [
      new MenuItem('', 'Home'),
      new MenuItem('', 'Currículo'),
      new MenuItem('', 'Contato')
    ];
  }

  public getItems(): Array<MenuItem> {
    return this.items;
  }

  public navigate(item: MenuItem) {
    this.router.navigate([item.path]);
  }
}
