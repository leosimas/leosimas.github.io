import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/models/certification';

@Component({
  selector: 'app-certification-card',
  templateUrl: './certification-card.component.html',
  styleUrls: ['./certification-card.component.scss']
})
export class CertificationCardComponent implements OnInit {

  @Input() certification: Certification;

  constructor() { }

  ngOnInit() {
  }

}
