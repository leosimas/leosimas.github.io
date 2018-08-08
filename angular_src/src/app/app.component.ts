import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarComponent } from './views/components/toolbar/toolbar.component';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('appToolbar') appToolbar: ToolbarComponent;
  @ViewChild('drawer') drawer: MatDrawer;

  ngOnInit(): void {
    const me = this;
    this.appToolbar.onMenuClick = function () {
      me.drawer.toggle();
    };
  }
}
