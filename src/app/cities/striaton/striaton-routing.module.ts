import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StriatonPage } from './striaton.page';

const routes: Routes = [
  {
    path: '',
    component: StriatonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StriatonPageRoutingModule {}
