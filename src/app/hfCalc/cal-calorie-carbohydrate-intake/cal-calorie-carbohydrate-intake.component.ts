import { Component } from '@angular/core';

@Component({
  selector: 'app-cal-calorie-carbohydrate-intake',
  templateUrl: './cal-calorie-carbohydrate-intake.component.html',
  styleUrl: './cal-calorie-carbohydrate-intake.component.css'
})
export class CalCalorieCarbohydrateIntakeComponent {
  info = {
    heading: "Calorie And Carbohydrate Intake Calculator",
    infos: [
      {
        title: "What Is Calorie Calculator ?",
        desc: `To accurately determine your daily calorie amount above, enter your current weight, age, height, and gender into the calculator. And Calculator Gives You Answer In Form Of How Much Calories you Need Per Day.        `,
      },
      {
        title: "What is Carbohydrate Intake Calculator ?",
        desc: `If you have figured out your ideal daily Carbohydrate intake , Carbohydrate Calculator Gives You How Many Grams Of Carbohydrate per Day you Should Take , Only You Have To Just Enter Age , Weight ,Height & Select Gender. It Will Count Carbohydrates From Calories per Day.`,
      },
      {
        title: "What is Activity ?",
        desc: `Calorie Is Depends On How much Exercise you are Doing in whole Day , there are many option we have in activity like Little or No exercise , Moderate exercise etc.        `,
      },
    ]
  }
}
