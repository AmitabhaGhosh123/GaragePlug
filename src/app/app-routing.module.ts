import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsizeComponent } from './carsize/carsize.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'carsize',
    component: CarsizeComponent
  },
  {
    path: 'price',
    component: PriceComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
