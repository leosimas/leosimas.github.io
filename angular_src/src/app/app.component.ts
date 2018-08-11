import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ToolbarComponent } from './views/components/toolbar/toolbar.component';
import { MatDrawer } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MenuService, MenuItem } from './services/menu.service';
import { Title } from '../../node_modules/@angular/platform-browser';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('appToolbar') appToolbar: ToolbarComponent;
  @ViewChild('drawer') drawer: MatDrawer;

  showMenu = true;

  watcher: Subscription;
  menuItems: Array<MenuItem>;

  constructor(media: ObservableMedia,
    private menuService: MenuService,
    profile: ProfileService,
    titleService: Title) {
    titleService.setTitle( profile.get().pageTitle );
    this.menuItems = menuService.getItems();
    this.watcher = media.subscribe((change: MediaChange) => {
      this.setSideDrawerStyle( change );
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  ngOnInit(): void {
    const me = this;
    this.appToolbar.onMenuClick = function () {
      me.drawer.toggle();
    };
  }

  setSideDrawerStyle(change: MediaChange) {
    const showMenu = [ 'xs', 'sm' ].includes( change.mqAlias );
    if ( this.appToolbar ) {
      this.appToolbar.setShowMenuOptions(!showMenu);
    }
    const shouldClose = !showMenu && this.showMenu !== showMenu;
    if ( shouldClose && this.drawer && this.drawer.opened ) {
      this.drawer.close();
    }

    this.showMenu = showMenu;
  }

  onMenuItemClick(item: MenuItem) {
    this.menuService.navigate(item);
    this.drawer.close();
  }
}
