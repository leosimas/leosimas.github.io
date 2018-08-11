import { Component, OnInit } from '@angular/core';
import { Certification } from '../../components/certification-card/certification-card.component';
import { ProfileService, Graduation } from '../../../services/profile.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  certifications: Array<Certification>;
  formation: Array<Graduation>;

  constructor(profile: ProfileService) {
    this.certifications = profile.get().certifications;
    this.formation = profile.get().formation;
  }

  ngOnInit() {
  }

}
