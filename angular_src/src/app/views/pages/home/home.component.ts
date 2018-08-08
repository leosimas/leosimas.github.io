import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textName: string;
  textIntro: string;
  textTitle: string;

  constructor(profileService: ProfileService) {
    const p = profileService.get();
    this.textName = p.name;
    this.textTitle = p.title;
    this.textIntro = p.intro;
  }

  ngOnInit() {
  }

}
