import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuService } from '../../../services/menu.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  onMenuClick: Function;
  showMenuOptions: boolean;
  menuItems: Array<MenuItem>;
  name: string;

  constructor(private menuService: MenuService,
    profile: ProfileService) {
    this.menuItems = menuService.getItems();
    this.name = profile.get().name;
  }

  setShowMenuOptions(show: boolean) {
    this.showMenuOptions = show;
  }

  onMenuItemClick(item: MenuItem) {
    this.menuService.navigate(item);
  }

}
