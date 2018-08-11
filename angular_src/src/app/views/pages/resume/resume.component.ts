import { Component, OnInit } from '@angular/core';
import { Certification } from '../../components/certification-card/certification-card.component';
import { ProfileService, Graduation, Profile } from '../../../services/profile.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  certifications: Array<Certification>;
  formation: Array<Graduation>;
  roles: Array<any>;
  jobs: Array<any>;

  constructor(profile: ProfileService) {
    const p = profile.get();
    this.certifications = p.certifications;
    this.formation = p.formation;
    this.roles = p.roles
    this.jobs = p.jobs;
  }

  ngOnInit() {
  }

}
