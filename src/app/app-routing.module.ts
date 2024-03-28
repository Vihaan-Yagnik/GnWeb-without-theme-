import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageCalcListComponent } from './homepage-calc-list/homepage-calc-list.component';
import { SimpleInterestCalcComponent } from './simple-interest-calc/simple-interest-calc.component';
import { RectangularBarCalcComponent } from './metal_weight/rectangular-bar-calc/rectangular-bar-calc.component';
import { RectangularPipeCalcComponent } from './metal_weight/rectangular-pipe-calc/rectangular-pipe-calc.component';
import { FlatPlateCalcComponent } from './metal_weight/flat-plate-calc/flat-plate-calc.component';
import { RoundBarWComponent } from './metal_weight/round-bar-w/round-bar-w.component';
import { RoundPipeCalcComponent } from './metal_weight/round-pipe-calc/round-pipe-calc.component';
import { SquareBarCalcComponent } from './metal_weight/square-bar-calc/square-bar-calc.component';
import { SquarePipeCalcComponent } from './metal_weight/square-pipe-calc/square-pipe-calc.component';
import { TBarCalcComponent } from './metal_weight/t-bar-calc/t-bar-calc.component';
import { TriangularBarCalcComponent } from './metal_weight/triangular-bar-calc/triangular-bar-calc.component';
import { TriangularPipeCalcComponent } from './metal_weight/triangular-pipe-calc/triangular-pipe-calc.component';
import { HexagonBarCalcComponent } from './metal_weight/hexagon-bar-calc/hexagon-bar-calc.component';

const routes: Routes = [
  {path:"",component: HomepageCalcListComponent},
  {path:"simpleInterestCalc" , component: SimpleInterestCalcComponent},
  {path:"rectangleBar" , component : RectangularBarCalcComponent},
  {path:"rectanglePipe" , component: RectangularPipeCalcComponent},
  {path:"flatplate" , component: FlatPlateCalcComponent},
  {path:"roundBar" , component: RoundBarWComponent},
  {path:"roundPipe" , component: RoundPipeCalcComponent},
  {path:"squareBar" , component : SquareBarCalcComponent},
  {path:"squarePipe" , component : SquarePipeCalcComponent},
  {path:"tBar" , component: TBarCalcComponent},
  {path:"triangleBar" , component : TriangularBarCalcComponent},
  {path:"trianglePipe" , component : TriangularPipeCalcComponent},
  {path:"hexagonBar" , component : HexagonBarCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
