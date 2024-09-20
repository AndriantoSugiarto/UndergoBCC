import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UndergoHomePage } from './undergo-home.page';

const routes: Routes = [
  {
    path: '',
    component: UndergoHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UndergoHomePageRoutingModule {}
