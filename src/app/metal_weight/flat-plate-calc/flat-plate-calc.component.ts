import { Component } from '@angular/core';
class Calc {
  density: number = 7850
  thickness: number = 10
  length: number = 10
  sideA : number = 10
  sideB : number = 10
  quantity: number = 100
  weight: number = 0
  kgtolbs: number = this.weight * 2.20462
  money: number = 0
  volume: number = 0
  amount = 4

  unitMultiplierThickness: number = 0.001;
  unitMultiplierLength: number = 1;
  unitMultiplierSideA: number = 1;
  unitMultiplierSideB: number = 0.001;

  calculator() {
    this.volume = this.sideA*this.sideB*this.length*this.unitMultiplierLength*this.unitMultiplierSideA*this.unitMultiplierSideB
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
    heading : " Weight of Flat Plate	",
    infos : [
      {
        title : "Weight in Kg",
        desc : "932.58 Kg",
      },
      {
        title : "Weight in lbs",
        desc : "2056.41 Lbs",
      },
      {
        title : "Total Amount",
        desc : "37,303.2 Rs.",
      },
    ],
    units: [
      {
        title : "Side ( A )" ,
        value : "10 m"
      },
      {
        title : "Side ( B ) ",
        value : "10 mm"
      },
      {
        title: "Length ( l )",
        value : "10 m"
      },
      {
        title : "Density ( p )",
        value : "7850 kg/m3",
      }
    ]
  }


  submit() {
    this.calculator()
    this.info.infos[0].desc = this.weight.toString() + " Kg"
    this.info.infos[1].desc = this.kgtolbs + " Lbs"
    this.info.infos[2].desc = this.money + " Rs."
    this.info.units[0].value = this.sideA + this.units[this.unitMultiplierSideA]
    this.info.units[1].value = this.sideB + this.units[this.unitMultiplierSideB]
    this.info.units[2].value = this.length + this.units[this.unitMultiplierLength]
    this.info.units[3].value = this.density + " kg/m3"
  }
}
@Component({
  selector: 'app-flat-plate-calc',
  templateUrl: './flat-plate-calc.component.html',
  styleUrl: './flat-plate-calc.component.css',
  providers: [Calc]
})
export class FlatPlateCalcComponent {

  constructor(public calc : Calc){}


  info2 = {
    heading : "How to calculate Flat Plate Weight?",
    infos : [
      {
        title : "Flat Plate Volume Calculation Formula",
        desc : `The Flat Plate have unequal length sides with length, So we first calculate the volume of Flat Plate using below formula. `,
        formula : "Volume(v) = Side(A) * Side(B) * Length(l)",
      },
      {
        title : "Flat Plate Weight Calculation Formula",
        desc : `Now, Calculate the Weight(Mass) of Flat Plate by multiplying the Volume (v) with Density(p) of Material`,
        formula : "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title : "Calculate Cost of Flat Plate",
        desc : `By using below formula we can calculate the total price.`,
        formula : "Price(P) = Price(1Kg) * Quantity(q) * Weight(w)",
      },
    ]
  }

  info3 = {
    heading : "Applications of Rectangle Pipe",
    infos : [
      {
        title : "",
        desc : "",
      }
    ]
  }
}
