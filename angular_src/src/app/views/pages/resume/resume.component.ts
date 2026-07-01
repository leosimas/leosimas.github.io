import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Certification } from 'src/app/models/certification';
import { Graduation } from 'src/app/models/graduation';
import { Job } from 'src/app/models/job';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  certifications: Array<Certification>;
  formation: Array<Graduation>;
  roles: Array<Role>;
  jobs: Array<Job>;

  constructor(profile: ProfileService) {
    profile.get().then((p) => {
      this.certifications = p.certifications;
      this.formation = p.formation;
      this.roles = p.roles;
      this.jobs = p.jobs;
    });
  }

  ngOnInit() {
  }

}
