import { Component } from '@angular/core';
class Calc {
  density: number = 7850
  thickness: number = 10
  length: number = 3
  sideA : number = 1
  sideB : number = 1
  quantity: number = 10
  weight: number = 0
  kgtolbs: number = this.weight * 2.20462
  money: number = 0
  volume: number = 0
  amount = 4

  unitMultiplierThickness: number = 0.001;
  unitMultiplierLength: number = 1;
  unitMultiplierSideA: number = 1;
  unitMultiplierSideB: number = 1;

  calculator() {
    this.volume = this.length*this.unitMultiplierLength*((this.sideA*this.sideB* this.unitMultiplierSideA* this.unitMultiplierSideB)-((this.sideA*this.unitMultiplierSideA-2*this.thickness*this.unitMultiplierThickness)*(this.sideB*this.unitMultiplierSideB - 2*this.thickness*this.unitMultiplierThickness)))
    this.weight = this.volume * this.density
    this.weight = Number(this.weight.toFixed(2))
    this.kgtolbs = this.weight * 2.20462
    this.kgtolbs = Number(this.kgtolbs.toFixed(2))
    this.money = this.amount * this.quantity * this.weight
    this.money = Number(this.money.toFixed(2))
  }

  units: any = {
    0.01: "cm",
    0.0254: "in",
    0.001: "mm",
    1: "m",
    0.3048: "ft",
    0.9144: "yd"
  }

  info = {
    heading: " Weight of Rectangle Pipe",
    infos: [
      {
        title: "Weight in Kg",
        desc: "932.58 Kg",
      },
      {
        title: "Weight in lbs",
        desc: "2056.41 Lbs",
      },
      {
        title: "Total Amount",
        desc: "37,303.2 Rs.",
      },
    ],
    units: [
      {
        title: "Thickness ( t )",
        value: "10mm"
      },
      {
        title: "SideA ( A ) ",
        value: "1m"
      },
      {
        title: "SideA ( B ) ",
        value: "1m"
      },
      {
        title: "Length ( l )",
        value: "3m"
      },
      {
        title: "Density ( p )",
        value: "7850 kg/m3",
      }
    ]
  }


  submit() {
    this.calculator()
    this.info.infos[0].desc = this.weight.toString() + " Kg"
    this.info.infos[1].desc = this.kgtolbs + " Lbs"
    this.info.infos[2].desc = this.money + " Rs."
    this.info.units[0].value = this.thickness + this.units[this.unitMultiplierThickness]
    this.info.units[1].value = this.sideA + this.units[this.unitMultiplierSideA]
    this.info.units[2].value = this.sideB + this.units[this.unitMultiplierSideB]
    this.info.units[3].value = this.length + this.units[this.unitMultiplierLength]
    this.info.units[4].value = this.density + " kg/m3"
  }
}

@Component({
  selector: 'app-rectangular-pipe-calc',
  templateUrl: './rectangular-pipe-calc.component.html',
  styleUrl: './rectangular-pipe-calc.component.css',
  providers: [Calc]
})
export class RectangularPipeCalcComponent {

  constructor(public calc: Calc) { }

  info2 = {
    heading: "How to calculate Rectangle Pipe Weight?",
    infos: [
      {
        title: "Rectangle Pipe Volume Calculation Formula",
        desc: `To find the actual volume,we subtract the inner hollow rectangle tube volume by bellow formula.        `,
        formula: "Volume(v) = Rectangle Bar Volume - Hollow Volume",
      },
      {
        title: "Rectangle Pipe Weight Calculation Formula",
        desc: `Calculate the Weight(Mass) of Rectangle Pipe by multiplying the Volume (v) with Density(p) of Material`,
        formula: "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title: "Calculate Cost of Rectangle Pipe",
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
