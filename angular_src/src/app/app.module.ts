import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/pages/home/home.component';
import { ToolbarComponent } from './views/components/toolbar/toolbar.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { ResumeComponent } from './views/pages/resume/resume.component';
import { ContactCardComponent } from './views/components/contact-card/contact-card.component';

// Add an icon to the library for convenient access in other components
library.add(fas, fab);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ContactComponent,
    ResumeComponent,
    ContactCardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
