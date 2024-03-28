import { Component } from '@angular/core';

@Component({
  selector: 'app-triangular-pipe-calc',
  templateUrl: './triangular-pipe-calc.component.html',
  styleUrl: './triangular-pipe-calc.component.css'
})
export class TriangularPipeCalcComponent {
  info = {
    heading : "Weight of Triangular Pipe	",
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
        title : "Thickness ( t )" ,
        value : "10mm"
      },
      {
        title : "SideA ( A ) ",
        value : "1m"
      },
      {
        title: "Length ( l )",
        value : "3m"
      },
      {
        title : "Density ( p )",
        value : "7245",
      }
    ]
  }

  info2 = {
    heading : "How to calculate Triangular Pipe Weight?",
    infos : [
      {
        title : "Triangular Bar Volume Calculation Formula",
        desc : `To find the actual volume,we subtract the inner hollow Triangular tube volume by bellow formula. `,
        formula : "Volume(v)= Triangular Bar Volume - Hollow Volume",
      },
      {
        title : "Triangular Bar Weight Calculation Formula",
        desc : `Calculate the Weight(Mass) of Triangular Bar by multiplying the Volume (v) with Density(p) of Material.`,
        formula : "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title : "Calculate Cost of Triangular Bar",
        desc : `By using below formula we can calculate the total price.`,
        formula : "Price(P) = Price(1Kg) * Quantity(q) * Weight(w)",
      },
    ]
  }

  list = {
    heading: "Other Calculators",
    icon:"fa fa-calculator",
    items : [
      {
        icon : "fa fa-circle",
        name : " Round Bar",
        link: ''
      },
      {
        icon : "fa fa-cube",
        name : "Rectangle Pipe",
        link: ''
      },
      {
        icon : "fa fa-cube",
        name : " Hexagonal Bar",
        link: ''
      },
      {
        icon : "fa fa-clone",
        name : " Flat Plate",
        link: ''
      },
      {
        icon : "fa fa-square",
        name : " Square Bar",
        link: ''
      },
      {
        icon : "fa fa-square",
        name : " Square Pipe",
        link: ''
      },
      {
        icon : "fa fa-cube",
        name : " Rectangle Bar",
        link: ''
      },
      {
        icon : "fa fa-circle",
        name : " Round Pipe",
        link: ''
      },
      {
        icon : "fa fa-text-width",
        name : "T bar",
        link: ''
      },
      {
        icon : "fa fa-caret-up",
        name : " Triangular Bar",
        link: ''
      },
      {
        icon : "fa fa-caret-up",
        name : " Triangular pipe",
        link: ''
      },
    ]
  };

  info3 = {
    heading : "Applications of Triangular Pipe",
    infos : [
      {
        title : "",
        desc : "",
      }
    ]
  }
}
