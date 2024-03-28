import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrl: './bmi-calc.component.css'
})
export class BMICalcComponent {
  info = {
    heading : "BMI Calculator",
    infos : [
      {
        title : "What is BMI ?",
        desc : `Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Enter your weight and height using English Imperial Formula or metric measures.`,
      },
      {
        title : "What is Metric Formula?",
        desc : `The metric formula accepts height measurements in meters and weight in kilograms.`,
      },
      {
        title : "What is English Imperial Formula ?",
        desc : `The imperial formula accepts height measurements in inches and weight in pounds. It's popular in the US where the imperial system is mostly used.`,
      },

    ]
  }
}
