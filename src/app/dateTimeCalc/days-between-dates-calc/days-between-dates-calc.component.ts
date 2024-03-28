import { Component } from '@angular/core';

@Component({
  selector: 'app-days-between-dates-calc',
  templateUrl: './days-between-dates-calc.component.html',
  styleUrl: './days-between-dates-calc.component.css'
})
export class DaysBetweenDatesCalcComponent {
  info = {
    heading : "Count Days Between Two Dates",
    infos : [
      {
        title : "What is Days Between Two Dates Calculator ?",
        desc : "It will Return No. of perticular Days and total count of days between Start dates and end dates.For Example if We need cont of sunday and monday in this month then select start date and end date and click on Selected Button.",
      },
      {
        title : "How Selected and Exclude Selected Works?",
        desc : "Selected means it can return count of those day which we selected. Exclude Selected Means It can return count of those days which we do not selected",
      },
      {
        title : "What is Start Date ?",
        desc : "For Example The calendar day on which a project initiates. It includes the day, month and year.",
      },
      {
        title : "What is End Date ?",
        desc : "For Example The calendar day on which a project complete. It includes the day, month and year.",
      },
    ]
  }
}
