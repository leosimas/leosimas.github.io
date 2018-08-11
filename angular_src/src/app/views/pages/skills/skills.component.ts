import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: {}[];
  
  constructor(profile: ProfileService) {
    this.skills = profile.get().skills;
   }

  ngOnInit() {
  }

}
