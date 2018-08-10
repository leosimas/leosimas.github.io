import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuService } from '../../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  onMenuClick: Function;
  showMenuOptions: boolean;
  menuItems: Array<MenuItem>;

  constructor(private menuService: MenuService) {
    this.menuItems = menuService.getItems();
  }

  setShowMenuOptions(show: boolean) {
    this.showMenuOptions = show;
  }

  onMenuItemClick(item: MenuItem) {
    this.menuService.navigate(item);
  }

}
