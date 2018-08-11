import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/views/pages/home/home.component';
import { ContactComponent } from './views/pages/contact/contact.component';
import { ResumeComponent } from './views/pages/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)] ,
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
