import { Component } from '@angular/core';

@Component({
  selector: 'app-triangular-bar-calc',
  templateUrl: './triangular-bar-calc.component.html',
  styleUrl: './triangular-bar-calc.component.css'
})
export class TriangularBarCalcComponent {
  info = {
    heading: "Weight of Square Bar",
    infos: [
      {
        title: "Weight per 1 Kg",
        desc: "6.16 Kg",
      },
      {
        title: "Weight in Lbs",
        desc: "13.59 Lbs",
      },
      {
        title: "Volume",
        desc: "0.100 Cubic Meter",
      },
      {
        title: "Total Amount",
        desc: "24,649 Rs.",
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
    heading: "How to calculate Triangle Bar Weight? ",
    infos: [
      {
        title: "Triangle Bar Volume Calculation Formula",
        desc: `The triangle bar has equal length sides with equal side, So we first calculate the volume of square bar using below formula.`,
        formula: "Volume(v) = √3 / 4 * Side(A) * Side(A) * Length(l)",
      },
      {
        title: "Triangle Bar Weight Calculation Formula",
        desc: `Calculate the Weight(Mass) of Triangular bar by multiplying the Volume (v) with Density(p) of Material.`,
        formula: "Weight(w) = Volume(v) * Density(p)",
      },
      {
        title: "Price of Triangle Bar",
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

  list = {
    heading: "Other Calculators",
    icon: "fa fa-calculator",
    items: [
      {
        icon: "fa fa-circle",
        name: " Round Bar",
        link: ''
      },
      {
        icon: "fa fa-cube",
        name: "Rectangle Pipe",
        link: ''
      },
      {
        icon: "fa fa-cube",
        name: " Hexagonal Bar",
        link: ''
      },
      {
        icon: "fa fa-clone",
        name: " Flat Plate",
        link: ''
      },
      {
        icon: "fa fa-square",
        name: " Square Bar",
        link: ''
      },
      {
        icon: "fa fa-square",
        name: " Square Pipe",
        link: ''
      },
      {
        icon: "fa fa-cube",
        name: " Rectangle Bar",
        link: ''
      },
      {
        icon: "fa fa-circle",
        name: " Round Pipe",
        link: ''
      },
      {
        icon: "fa fa-text-width",
        name: "T bar",
        link: ''
      },
      {
        icon: "fa fa-caret-up",
        name: " Triangular Bar",
        link: ''
      },
      {
        icon: "fa fa-caret-up",
        name: " Triangular pipe",
        link: ''
      },
    ]
  };
}
