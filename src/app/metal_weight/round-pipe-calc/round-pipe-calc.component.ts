import { Component } from '@angular/core';
class Calc {
  density: number = 7850
  diameter: number = 20
  thickness : number = 10
  length : number = 10
  quantity: number = 100
  weight : number = 0
  kgtolbs :  number = this.weight*2.20462
  money : number = 0
  volume : number = 0
  amount = 40
  
  radius : number = 10

  unitMultiplierDiameter: number = 0.001;
  unitMultiplierThickness: number = 0.001;
  unitMultiplierLength : number = 1;

  calculator(){
    this.radius = (this.diameter/2)*this.unitMultiplierDiameter
    console.log(this.radius**2);
    
    this.volume = 3.14159*((this.radius**2)-((this.radius-(this.thickness*this.unitMultiplierThickness))**2))*this.length*this.unitMultiplierLength
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
        title : "Total Amount",
        desc : "24,649 Rs.",
      },
    ],
    units: [
      {
        title: "Thickness",
        value : "10mm"
      },
      {
        title : "Diameter ( d )" ,
        value : "10mm"
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
    this.info.infos[2].desc = this.money + " Rs."
    this.info.units[0].value = this.thickness + this.units[this.unitMultiplierThickness]
    this.info.units[1].value = this.diameter + this.units[this.unitMultiplierDiameter]
    this.info.units[2].value = this.length + this.units[this.unitMultiplierLength]
    this.info.units[3].value = this.density + " kg/m3"
  }
}

@Component({
  selector: 'app-round-pipe-calc',
  templateUrl: './round-pipe-calc.component.html',
  styleUrl: './round-pipe-calc.component.css',
  providers : [Calc]
})
export class RoundPipeCalcComponent {

  constructor(public calc : Calc){}

  info2 = {
    heading : "How to calculate Round Pipe Weight?",
    infos : [
      {
        title : "Round Pipe Sectional Area Calculation Formula",
        desc : `The Sectional Area of Round Bar can be calculated from Radius(r) & Height(h) by using following formula.`,
        formula : "Sectional Area = 2*π*r2 + (2*π*r*h)",
      },
      {
        title : "Round Pipe Volume Calculation Formula",
        desc : `To find the actual volume ,we subtract the inner hollow round tube volume by below formula.`,
        formula : "Volume(v) = Round Bar Volume - Hollow Volume",
      },
      {
        title : "Round Pipe Weight Calculation Formula",
        desc : `Now, Calculate the Weight(Mass) of Square bar by multiplying the Volume (v) with Density(p) of Material`,
        formula : "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title : "Round Pipe Price Calculation Formula",
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
