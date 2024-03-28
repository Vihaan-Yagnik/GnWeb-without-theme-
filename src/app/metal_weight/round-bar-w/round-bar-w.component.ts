import { Component } from '@angular/core';
class Calc {
  density: number = 7850
  diameter: number = 10
  length : number = 10
  quantity: number = 100
  weight : number = 0
  kgtolbs :  number = this.weight*2.20462
  money : number = 0
  volume : number = 0
  amount = 40
  
  radius : number = 0

  unitMultiplierDiameter: number = 0.001;
  unitMultiplierLength : number = 1;

  calculator(){
    this.radius = (this.diameter/2)*this.unitMultiplierDiameter
    this.volume = 3.14159*this.radius**2*(this.length*this.unitMultiplierLength)
    this.weight = this.volume*this.density
    this.weight = Number(this.weight.toFixed(2))
    this.kgtolbs = this.weight*2.20462
    this.kgtolbs = Number(this.kgtolbs.toFixed(2))
    this.money = this.amount*this.quantity*this.weight
  }


  units : any = { 
    0.01 : "cm",
    0.0254 : "in",
    0.001 : "mm",
    1 : "m",
    0.3048 : "ft",
    0.9144 : "yd"
  }

  info = {
    heading : "Weight of Round Bar	",
    infos : [
      {
        title : "Weight per 1 Kg",
        desc : "6.16 Kg",
      },
      {
        title : "Weight in Lbs",
        desc : "13.59 Lbs",
      },
      {
        title : "Volume",
        desc : "0.100 Cubic Meter",
      },
      {
        title : "Total Amount",
        desc : "24,649 Rs.",
      },
    ],
    units: [
      {
        title : "Diameter ( d )" ,
        value : "10 mm"
      },
      {
        title: "Length ( l )",
        value : "3 m"
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
    this.info.infos[3].desc = this.money + " Rs."
    this.info.units[0].value = this.diameter + this.units[this.unitMultiplierDiameter]
    this.info.units[1].value = this.length + this.units[this.unitMultiplierLength]
    this.info.units[2].value = this.density + " kg/m3"
  }
}

@Component({
  selector: 'app-round-bar-w',
  templateUrl: './round-bar-w.component.html',
  styleUrl: './round-bar-w.component.css',
  providers : [Calc]
})
export class RoundBarWComponent {
  
  constructor(public calc: Calc) { }

  info2 = {
    heading : "How to calculate Round Bar Weight?",
    infos : [
      {
        title : "Round Bar Sectional Area Calculation Formula",
        desc : `The Sectional Area of Round Bar can be calculated from Radius(r) & Height(h) by using following formula.`,
        formula : "Sectional Area = 2*π*r2 + (2*π*r*h)",
      },
      {
        title : "Round Bar Volume Calculation Formula",
        desc : `The round bar has diameter and length, So we first calculate the volume of round bar using above formula`,
        formula : "Volume(v) = Diameter(d) * Length(l)",
      },
      {
        title : "Round Bar Weight Calculation Formula",
        desc : `Weight of Round Bar can be calculated by multiplying the Volume (v) with Density(p) of Material.`,
        formula : "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title : "Calculate Cost of Round Bar",
        desc : `By using below formula we can calculate the total price.`,
        formula : "Price(P) = Weight(1kg) * Number of Pieces(q) * Weight(w)",
      },
    ]
  }

  info3 = {
    heading : "Applications of Round Bar",
    infos : [
      {
        title : "Steel Round Bars",
        desc : `Steel round bars are available in hot rolled or cold rolled. Hot rolled round bar is typically used for applications like construction where finish and precise dimensions aren’t a priority. Conversely, cold rolled round bar is used for applications where a superior surface finish and exact dimensions are essential. Some common applications of steel round bar include frameworks, supports, braces, shafts, and axles.`,
      },
      {
        title : "Stainless Steel Round Bars",
        desc : `Stainless steel round bars are highly corrosion resistant. The stainless steel will tolerate high levels of acidity and can be used in chlorine bearing environments or alkaline solutions.`,
      },
      {
        title : "Aluminum Round Bars",
        desc : `Aluminum round bars possess light weight and strong corrosion resistance, while being easy to machine and cut. Common applications of aluminum round bar include supports, trim, shaft, braces, pins, and dowels.        `,
      },
      {
        title : "Brass Round Bars",
        desc : `Brass round bars are used when strength, electrical conductivity, corrosion resistance, and spark resistance are important. Brass is easy to machine and has an attractive sheen when polished. Some examples of brass bar applications are marine hardware, instruments, fasteners and fittings.`,
      },
    ]
  }
}
