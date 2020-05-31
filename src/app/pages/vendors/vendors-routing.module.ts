import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorsListComponent } from './vendors-list/vendors-list.component';

const routes: Routes = [
  {
    path: '',
    component: VendorsListComponent,
    children: [
      {
        path: 'list',
        component: VendorsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
