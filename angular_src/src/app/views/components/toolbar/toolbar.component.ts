import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  onMenuClick: Function;
  showMenuOptions: boolean;

  constructor() { }

  setShowMenuOptions(show: boolean) {
    this.showMenuOptions = show;
  }

}
