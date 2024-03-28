import { Component } from '@angular/core';

@Component({
  selector: 'app-hf-army-body-fat-calc',
  templateUrl: './hf-army-body-fat-calc.component.html',
  styleUrl: './hf-army-body-fat-calc.component.css'
})
export class HfArmyBodyFatCalcComponent {
  info = {
    heading: "Army Body Fat Calculator",
    infos: [
      {
        title: "What is height ?",
        desc: "In typography, the body height refers to the distance between the top of the tallest letterform to the bottom of the lowest one.",
      },
      {
        title: "What is Neck ?",
        desc: "Measure neck circumference at a point just below the larynx and perpendicular to the long axis of the neck.",
      },
      {
        title: "What is Waist (Abdomen) ?",
        desc: "Waist - Women: The waist should be measured at the narrowest level, above the belly button (umbilicus). Another reference is halfway between the lowest rib on the sides and the top of the hips. If youâ€™re unsure measure a second and a third time until you get the lowest value. Make sure the tape is horizontal.Waist - Men: Measure the waist circumference at the level of the belly button (umbilicus). Here you don't need to find the narrowest size. Make sure the tape is horizontal.",
      },
      {
        title: "What is Hips ?",
        desc: "Use the widest circumference of the hips with the tape as horizontal as possible. Should be measured with minimal clothing or underwear. Relax the buttocks (gluteus muscles) and spread the feet to shoulder width. Not applicable for calculating male body fat percentage.",
      },
    ]
  }
}
