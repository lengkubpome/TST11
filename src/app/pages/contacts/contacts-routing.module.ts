import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './list/contact-list.component';
import { ContactNewComponent } from './new/contact-new.component';

const routes: Routes = [
  {
    path: '',
    // component: ContactListComponent,
    children: [
      {
        path: '',
        component: ContactListComponent,
      },
      {
        path: 'new',
        component: ContactNewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
