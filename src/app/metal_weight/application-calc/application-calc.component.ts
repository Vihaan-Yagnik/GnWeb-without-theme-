import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-application-calc',
  templateUrl: './application-calc.component.html',
  styleUrl: './application-calc.component.css'
})
export class ApplicationCalcComponent {
  @Input() info = {
    heading : "",
    infos : [
      {
        title : "",
        desc : "",
      }
    ]
  }
}
