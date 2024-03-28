import { Component } from '@angular/core';

@Component({
  selector: 'app-add-subtract-from-date-calc',
  templateUrl: './add-subtract-from-date-calc.component.html',
  styleUrl: './add-subtract-from-date-calc.component.css'
})
export class AddSubtractFromDateCalcComponent {
  info = {
    heading: "Add or Subtract From Date Calculator",
    infos: [
      {
        title: "What is Add or Subtract From Date Calculator ?",
        desc: "It can Add or Subtract Day from given date, According to digits we enter in Day, week and month.",
      },
      {
        title: "What is Start Date ?",
        desc: "For Example The calendar day on which a project initiates. It includes the day, month and year.",
      },
      {
        title: "What is Days ?",
        desc : "You Can Enter No of Days which you want to Add or subtract from given Date.",
      },
      {
        title: "What is Week ?",
        desc: "You Can Enter No of weeks which you want to Add or subtract from given Date.For Example It will Add / Subtract by 7 days if u Enter(1 week).",
      },
      {
        title: "What is Month ?",
        desc: "You Can Enter No of Days which you want to date or subtract from given Date.For Example It will Add / Subtract by days in those month if u Enter(1 month).",
      }
    ]
  }
}
