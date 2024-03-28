import { Component,} from '@angular/core';
class Calc {
  p: number = 7850
  t: number = 2
  A: number = 10
  l: number = 20
  q: number = 10
  w : number = 0
  kgtolbs :  number = this.w*2.20462
  money : number = 0
  v : number = 0
  amount = 5
  
  unitMultiplierT: number = 0.001;
  unitMultiplierS: number = 1;
  unitMultiplierL : number = 1;

  units : any = { 
    0.01 : "cm",
    0.0254 : "in",
    0.001 : "mm",
    1 : "m",
    0.3048 : "ft",
    0.9144 : "yd"
  }

  info = {
    heading: " Weight of Square Pipe",
    infos: [
      {
        title: "Weight in Kg",
        desc: "12559.87 kg",
      },
      {
        title: "Weight in lbs",
        desc: "27689.74 lbs",
      },
      {
        title: "Total Amount",
        desc: "627993.5 Rs",
      },
    ],
    units: [
      {
        title: "Thickness ( t )",
        value: "2 cm"
      },
      {
        title: "SideA ( A ) ",
        value: "10 m"
      },
      {
        title: "Length ( l )",
        value: "20 m"
      },
      {
        title: "Density ( p )",
        value: "7850 kg/m3"
      }
    ]
  }



  submit() {
    this.v = (this.A*this.unitMultiplierS * this.l*this.unitMultiplierL) ** 2 - (((this.A*this.unitMultiplierS * this.l*this.unitMultiplierL) - 2 * this.t*this.unitMultiplierT)) ** 2
    this.w = Number((this.v * this.p).toFixed(2))
    this.kgtolbs = Number((this.w*2.20462).toFixed(2))
    this.money = Number((this.amount*this.q*this.w).toFixed(2))
    this.info.infos[0].desc = this.w.toString() + " kg"
    this.info.infos[1].desc = this.kgtolbs.toString() + " lbs"
    this.info.infos[2].desc = this.money.toString() + " Rs"
    this.info.units[0].value = (this.t).toString() + " " + this.units[this.unitMultiplierT]
    this.info.units[1].value = this.A.toString() + " " + this.units[this.unitMultiplierS]
    this.info.units[2].value = this.l.toString() + " " + this.units[this.unitMultiplierL]
    this.info.units[3].value = this.p.toString() + " kg/m3"
  }
}

@Component({
  selector: 'app-square-pipe-calc',
  templateUrl: './square-pipe-calc.component.html',
  styleUrl: './square-pipe-calc.component.css',
  providers: [Calc]
})
export class SquarePipeCalcComponent {

  constructor(public calc: Calc) { }

  info2 = {
    heading: "How to calculate Square Pipe Weight?",
    infos: [
      {
        title: "Square Pipe Volume Calculation Formula",
        desc: `To find the actual volume,we subtract the inner hollow square tube volume by bellow formula. `,
        formula: "Volume(v)= Square Bar Volume - Hollow Volume",
      },
      {
        title: "Square Pipe Weight Calculation Formula",
        desc: `Calculate the Weight(Mass) of Square Pipe by multiplying the Volume (v) with Density(p) of Material.`,
        formula: "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title: "Calculate Cost of Square Pipe",
        desc: `By using below formula we can calculate the total price.`,
        formula: "Price(P) = Price(1Kg) * Quantity(q) * Weight(w)",
      },
    ]
  }
  info3 = {
    heading: "Applications of Rectangle Pipe",
    infos: [
      {
        title: "",
        desc: "",
      }
    ]
  }

}
