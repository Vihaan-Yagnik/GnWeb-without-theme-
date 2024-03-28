import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrl: './weight-list.component.css'
})
export class WeightListComponent {
  @Input() info = {
    heading: "",
    infos: [
      {
        title: "",
        desc: "",
      }
    ],
    units: [
      {
        title: "",
        value: "",
      },
    ]
  }
}
