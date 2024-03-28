import { Component } from '@angular/core';

@Component({
  selector: 'app-list-calc',
  templateUrl: './list-calc.component.html',
  styleUrl: './list-calc.component.css'
})
export class ListCalcComponent {
  list = {
    heading: "Other Calculators",
    icon:"fa fa-calculator",
    items : [
      {
        icon : "fa fa-circle",
        name : " Round Bar",
        link: '/roundBar'
      },
      {
        icon : "fa fa-cube",
        name : "Rectangle Pipe",
        link: '/rectanglePipe'
      },
      {
        icon : "fa fa-cube",
        name : " Hexagonal Bar",
        link: '/hexagonBar'
      },
      {
        icon : "fa fa-clone",
        name : " Flat Plate",
        link: '/flatplate'
      },
      {
        icon : "fa fa-square",
        name : " Square Bar",
        link: '/squareBar'
      },
      {
        icon : "fa fa-square",
        name : " Square Pipe",
        link: '/squarePipe'
      },
      {
        icon : "fa fa-cube",
        name : " Rectangle Bar",
        link: '/rectangleBar'
      },
      {
        icon : "fa fa-circle",
        name : " Round Pipe",
        link: '/roundPipe'
      },
      {
        icon : "fa fa-text-width",
        name : "T bar",
        link: '/tBar'
      },
      {
        icon : "fa fa-caret-up",
        name : " Triangular Bar",
        link: '/triangleBar'
      },
      {
        icon : "fa fa-caret-up",
        name : " Triangular pipe",
        link: '/triangleBar'
      },
    ]
  };
}
