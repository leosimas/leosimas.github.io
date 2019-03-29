import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Certification } from 'src/app/models/certification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textName: string;
  textIntro: string;
  textTitle: string;
  certifications: Certification[];

  constructor(profileService: ProfileService) {
    profileService.get()
      .then((p) => {
        this.textName = p.fullName;
        this.textTitle = p.title;
        this.textIntro = p.intro;
        this.certifications = p.certifications;
      });
  }

  ngOnInit() {
  }

}
