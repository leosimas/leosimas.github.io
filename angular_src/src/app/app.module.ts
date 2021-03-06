import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, GridModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatChipsModule, MatProgressBarModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/pages/home/home.component';
import { ToolbarComponent } from './views/components/toolbar/toolbar.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { ResumeComponent } from './views/pages/resume/resume.component';
import { ContactCardComponent } from './views/components/contact-card/contact-card.component';
import { CertificationCardComponent } from './views/components/certification-card/certification-card.component';
import { SkillsComponent } from './views/pages/skills/skills.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// Add an icon to the library for convenient access in other components
library.add(fas, fab);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ContactComponent,
    ResumeComponent,
    ContactCardComponent,
    CertificationCardComponent,
    SkillsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule,
    MatCardModule, MatChipsModule, MatProgressBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
