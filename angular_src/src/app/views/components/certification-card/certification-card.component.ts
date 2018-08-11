import { Component, OnInit, Input } from '@angular/core';

export class Certification {
  title: string;
  description: string = null;
  iconClass: string;
  url: string;
  
  constructor(title: string,
    description: string,
    iconClass: string,
    url: string) {
      this.title = title;
      this.description = description;
      this.iconClass = iconClass;
      this.url = url;
  }
}

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
