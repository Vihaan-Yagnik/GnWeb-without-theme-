import { Component } from '@angular/core';

@Component({
  selector: 'app-hexagon-bar-calc',
  templateUrl: './hexagon-bar-calc.component.html',
  styleUrl: './hexagon-bar-calc.component.css'
})
export class HexagonBarCalcComponent {
  info = {
    heading : "Weight of Hexagon Bar",
    infos : [
      {
        title : "Weight per 1 Kg",
        desc : `0.51 Kg`,
      },
      {
        title : "Weight in Lbs",
        desc : `1.12 Lbs`,
      },
      {
        title : "Total Amount",
        desc : `254.94 Rs.`,
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
    heading : "How to calculate Hexagon Tube Bar Weight?",
    infos : [
      {
        title : `Hexagon Bar Volume Calculation Formula`,
        desc : `The hexagonal bar has Side(S) with length, So we first calculate the volume of hexagonal bar using below formula.`,
        formula : "Volume(v) = ((√3 * 3)/2) * Side(S) * Side(S)  * Length(l)",
      },
      {
        title : `Hexagon Bar Weight Calculation Formula`,
        desc : `Calculate the Weight(Mass) of Hexagonal bar by multiplying the Volume (v) with Density(d) of Material`,
        formula : "Weight(w) = Volume(v) * Density(p)Weight(w) = Volume(v) * Density(p)",
      },
      {
        title : `Calculate Cost of Hexagon Bar`,
        desc : `By using below formula we can calculate the total price`,
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
    heading : "Applications of Hexagonal Bar",
    infos : [
      {
        title : "",
        desc : "",
      }
    ]
  }
}

