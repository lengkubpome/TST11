import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './list/contact-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    children: [
      {
        path: 'list',
        component: ContactListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
