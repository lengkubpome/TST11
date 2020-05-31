import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';

@NgModule({
  declarations: [VendorsComponent, VendorsListComponent],
  imports: [CommonModule, VendorsRoutingModule],
})
export class VendorsModule {}
