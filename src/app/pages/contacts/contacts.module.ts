import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import {
  NbSelectModule,
  NbDatepickerModule,
  NbRadioModule,
  NbCheckboxModule,
  NbActionsModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule,
  NbTreeGridModule,
  NbUserModule,
  NbCardModule,
  NbDialogModule,
  NbListModule,
} from '@nebular/theme';

import { ContactsRoutingModule } from './contacts-routing.module';
import {
  ContactListComponent,
  TableCellSuppliersNameRenderComponent,
  TableCellSuppliersContactRenderComponent,
  TableCellContactTypeRenderComponent,
} from './list/contact-list.component';
import { ContactsComponent } from './contacts.component';
import { ContactNewComponent } from './new/contact-new.component';

const COMPONENTS = [
  ContactsComponent,
  ContactListComponent,
  ContactNewComponent,
  TableCellSuppliersNameRenderComponent,
  TableCellContactTypeRenderComponent,
  TableCellSuppliersContactRenderComponent,
];

const ENTRY_COMPONENTS = [
  ContactNewComponent,
  TableCellSuppliersNameRenderComponent,
  TableCellContactTypeRenderComponent,
  TableCellSuppliersContactRenderComponent,
];

const MODULES = [
  NbDialogModule.forChild(),
  NbListModule,
  NbCardModule,
  NbUserModule,
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbActionsModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  ThemeModule,
  Ng2SmartTableModule,
  ContactsRoutingModule,
  ReactiveFormsModule,
];
const SERVICES = [];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ContactsModule {}
