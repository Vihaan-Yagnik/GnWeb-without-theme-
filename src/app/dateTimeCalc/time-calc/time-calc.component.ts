import { Component } from '@angular/core';

@Component({
  selector: 'app-time-calc',
  templateUrl: './time-calc.component.html',
  styleUrl: './time-calc.component.css'
})
export class TimeCalcComponent {
  info = {
    heading : "Time Calculator",
    infos : [
      {
        title : "What is Time Calculator ?",
        desc : "Calculate the Time Between two date and time. It Calculate the Time difference in years, month, day, hours, minute and second. For example calculate how many time to complete the project or work",
      },
      {
        title : "What is Start Date ?",
        desc: "For Example The calendar day on which a project initiates. It includes the day, month and year."
      },
      {
        title : "What is Start Time ?",
        desc: "For Example The clock time on which a project initiates or work start. It includes the hour, minute and second."
      },
      {
        title : "What is End Date ?",
        desc: "For Example The calendar day on which a project complete. It includes the day, month and year."
      },
      {
        title : "What is End Time ?",
        desc: "For Example The clock time on which a project complete or work End. It includes the hour, minute and second."
      },
    ]
  }
}
