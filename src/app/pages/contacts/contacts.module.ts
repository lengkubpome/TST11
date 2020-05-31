import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './list/contact-list.component';

@NgModule({
  declarations: [ContactsComponent, ContactListComponent],
  imports: [CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}
