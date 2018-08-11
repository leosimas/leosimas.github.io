import { Component, OnInit } from '@angular/core';
import { Certification } from '../../components/certification-card/certification-card.component';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  certifications: Array<Certification>;

  constructor(profile: ProfileService) {
    this.certifications = profile.get().certifications
  }

  ngOnInit() {
  }

}
