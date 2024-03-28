import { Component } from '@angular/core';

@Component({
  selector: 'app-day-from-date-calc',
  templateUrl: './day-from-date-calc.component.html',
  styleUrl: './day-from-date-calc.component.css'
})
export class DayFromDateCalcComponent {
  info = {
    heading : "Day From Date Calculator",
    infos : [
      {
        title : "What is Day From Date Calculator ?",
        desc : "It Calculate the Day From Given Date.",
      },
      {
        title : "What is Date ?",
        desc : "For Example The calendar day on which a project initiates. It includes the day, month and year.",
      },
    ]
  }
}
