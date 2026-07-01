import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(profile: ProfileService) {
    profile.get().then((p) => {
      this.skills = p.skills;
    });
   }

  ngOnInit() {
  }

}
