import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-how-to-calc',
  templateUrl: './how-to-calc.component.html',
  styleUrl: './how-to-calc.component.css'
})
export class HowToCalcComponent {
  @Input() info = {
    heading : "",
    infos : [
      {
        title : "",
        desc : "",
        formula : "",
      }
    ]
  }
}
