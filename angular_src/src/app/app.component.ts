import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ToolbarComponent } from './views/components/toolbar/toolbar.component';
import { MatDrawer } from '@angular/material';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('appToolbar') appToolbar: ToolbarComponent;
  @ViewChild('drawer') drawer: MatDrawer;

  showSideDrawer = true;
  drawerMode = 'side';
  drawerHasBackdrop = false;

  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      console.log(change);
      console.log(change.mqAlias);
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
    const showSide = ![ 'xs', 'sm' ].includes( change.mqAlias );
    if ( this.appToolbar ) {
      this.appToolbar.setShowMenuOptions(showSide);
    }
    this.drawerHasBackdrop = !showSide ;
    if ( showSide ) {
      this.drawerMode = 'side';
      if (this.drawer && !this.drawer.opened) {
        this.drawer.open();
      }
    } else {
      this.drawerMode = 'over';
      if (this.drawer && this.drawer.opened &&
        this.showSideDrawer !== showSide ) {
        this.drawer.close();
      }
    }

    this.showSideDrawer = showSide;
  }
}
