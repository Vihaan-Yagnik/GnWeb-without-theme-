import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
class Calc {
  density: number = 7850
  length: number = 7
  side : number = 5
  quantity: number = 5
  weight: number = 0
  kgtolbs: number = this.weight * 2.20462
  money: number = 0
  volume: number = 0
  amount = 1

  unitMultiplierLength: number = 1;
  unitMultiplierSide: number = 1;

  calculator() {
    this.volume = this.side**2 * this.length * this.unitMultiplierLength * this.unitMultiplierSide
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
        title: "Side ",
        value: "5m"
      },
      {
        title: "Length ( l )",
        value: "7m"
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
    this.info.units[0].value = this.side + this.units[this.unitMultiplierSide]
    this.info.units[1].value = this.length + this.units[this.unitMultiplierLength]
    this.info.units[2].value = this.density + " kg/m3"
  }
}


@Component({
  selector: 'app-square-bar-calc',
  templateUrl: './square-bar-calc.component.html',
  styleUrl: './square-bar-calc.component.css',
  providers: [Calc]
})
export class SquareBarCalcComponent {
  constructor(public calc : Calc){}

  info2 = {
    heading: "How to calculate Square Bar Weight?",
    infos: [
      {
        title: "Volume of Square Bar",
        desc: `The square bar has equal length sides with length, So we first calculate the volume of square bar using below formula.`,
        formula: "Volume(v) = Side(s) * Side(s) * Length(l)",
      },
      {
        title: "Weight of Square Bar",
        desc: `Now, Calculate the Weight(Mass) of Square bar by multiplying the Volume (v) with Density(p) of Material`,
        formula: "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title: "Price of Square Bar",
        desc: `By using below formula we can calculate the total price.`,
        formula: "Price(P) = Price(1Kg) * Quantity(q) * Weight(w)",
      }
    ]
  }

  info3 = {
    heading: "Applications of Round Bar",
    infos: [
      {
        title: "",
        desc: "",
      },
    ]
  }
}
