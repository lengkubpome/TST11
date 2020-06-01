import { Component, OnInit, TemplateRef, Input } from '@angular/core';
// import { NbDialogService } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { Contacts } from '../../../@core/models/contacts.model';
import { DummyContact } from '../../../@core/data/contact';

@Component({
  selector: 'ngx-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  // SmartTable
  settings = {
    mode: 'external',
    // selectMode: 'multi',
    hideSubHeader: true,
    noDataMessage: 'ไม่พบข้อมูลสินค้า',
    actions: {
      columnTitle: '',
      position: 'right',
      add: false,
      delete: false,
    },
    rowClassFunction: (row) => {
      if (row.isSelected) {
        return 'selected';
      } else {
        return 'aborted';
      }
    },
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    edit: {
      editButtonContent: '<i class="nb-menu"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ชื่อผู้ติดต่อ',
        type: 'custom',
        // tslint:disable-next-line: no-use-before-declare
        renderComponent: TableCellSuppliersNameRenderComponent,
      },
      type: {
        title: 'ประเภท',
        type: 'custom',
        // tslint:disable-next-line: no-use-before-declare
        renderComponent: TableCellContactTypeRenderComponent,
      },

      contact: {
        title: 'ช่องทางติดต่อ',
        type: 'custom',
        // tslint:disable-next-line: no-use-before-declare
        renderComponent: TableCellSuppliersContactRenderComponent,
      },
      address: {
        title: 'สถานะ',
        type: 'string',
        valuePrepareFunction: (value) => {
          return value === 'active' ? 'ปกติ' : 'เลิกใช้งาน';
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  //  End SmartTable

  constructor() {
    // SmartTableData
    this.source.load(DummyContact);
  }

  ngOnInit(): void {}

  selectedRows = '';
  onUserRowSelect(event: any) {
    this.selectedRows = event.selected;
    console.log(this.selectedRows);
  }

  // ================ Dialog ================
  openCreateProduct(dialog?: TemplateRef<any>): void {
    // this.dialogService.open(dialog, {
    // 	context: 'this is some additional data passed to dialog',
    // 	closeOnBackdropClick: false
    // });
    // this.dialogService
    //   .open(ContactsCreateComponent, {
    //     context: {
    //       title: 'เพิ่มผู้ติดต่อ',
    //     },
    //     closeOnBackdropClick: false,
    //     closeOnEsc: false,
    //   })
    //   .onClose.subscribe((res) => {
    //     if (res) {
    //       this.data2 = [...this.data2, res];
    //       this.source.load(this.data2);
    //       console.log('Create product success');
    //     }
    //   });
  }

  onDeleteConfirm(event: any): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onAlert(event: any) {
    // console.log(event);
  }

  onFilter(filterValue: string): void {
    if (filterValue.trim().toLowerCase()) {
      this.source.setFilter(
        [
          { field: 'id', search: filterValue },
          {
            field: 'person',
            search: filterValue,
            filter: this.filterColumnName,
          },
          {
            field: 'organisation',
            search: filterValue,
            filter: this.filterColumnName,
          },
          {
            field: 'contact',
            search: filterValue,
            filter: (fieldValue: object[], searchValue: string) => {
              for (let i = 0; i < fieldValue.length; i++) {
                // tslint:disable-next-line: forin
                for (const key in fieldValue[i]) {
                  const value = fieldValue[i][key].toString().toUpperCase();
                  if (value.indexOf(searchValue.toUpperCase()) !== -1)
                    return fieldValue;
                }
              }
            },
          },
          {
            field: 'contactType',
            search: filterValue,
            filter: (fieldValue: Contacts[], searchValue: string) => {
              // คัดกรอบแยกคำค้นหาด้วยตัวอักษร ' ', ',', '+'
              const tmpSearch: string[] = searchValue.split(/[\s,+]+/);
              // ค้นหาทุกๆค่าใน array
              const result = tmpSearch.every((tmp) => {
                for (const key in fieldValue) {
                  if (key === 'vendor' && fieldValue[key]) {
                    if (
                      'VENDOR'.indexOf(tmp.toUpperCase()) !== -1 ||
                      'ผู้ขาย'.indexOf(tmp.toUpperCase()) !== -1
                    ) {
                      return true;
                    }
                  } else if (key === 'customer' && fieldValue[key]) {
                    if (
                      'CUSTOMER'.indexOf(tmp.toUpperCase()) !== -1 ||
                      'ผู้รับซื้อ'.indexOf(tmp.toUpperCase()) !== -1
                    ) {
                      return true;
                    }
                  }
                }
              });

              if (result) return fieldValue;
            },
          },
        ],
        false
      );
    } else {
      this.source.reset();
    }
  }

  filterColumnName(fieldValue: object, searchValue: string) {
    // คัดกรอบแยกคำค้นหาด้วยตัวอักษร ' ', ',', '+'
    const tmpSearch: string[] = searchValue.split(/[\s,+]+/);
    // ค้นหาทุกๆค่าใน array
    const result = tmpSearch.every((tmp) => {
      for (const key in fieldValue) {
        // เช็ค Object ว่าเป็น Object อีกหรือไม่
        if (fieldValue[key] instanceof Object) {
          // tslint:disable-next-line: forin
          for (const key2 in fieldValue[key]) {
            const value2 = fieldValue[key][key2].toString().toUpperCase();
            if (value2.indexOf(tmp.toUpperCase()) !== -1) {
              return true;
            }
          }
        } else {
          const value = fieldValue[key].toString().toUpperCase();
          if (value.indexOf(tmp.toUpperCase()) !== -1) {
            return true;
          }
        }
      }
    });
    if (result) return fieldValue;
  }
}

//====== Setup Smart Table Cell =======

@Component({
  template: `
    <nb-user [name]="renderNameValue" [title]="renderIdValue" size="large">
    </nb-user>
  `,
})
export class TableCellSuppliersNameRenderComponent implements ViewCell, OnInit {
  renderNameValue: string;
  renderIdValue: string;

  @Input() value: string | number;
  @Input() rowData: Contacts;

  ngOnInit() {
    if (this.rowData.primaryContactType === 'Person') {
      this.renderNameValue =
        this.rowData.person.title +
        ' ' +
        this.rowData.person.firstName +
        ' ' +
        this.rowData.person.lastName;
      this.renderIdValue = this.rowData.person.id.toString();
    } else {
      this.renderNameValue =
        this.rowData.organisation.title +
        ' ' +
        this.rowData.organisation.name.toString();
      this.renderIdValue = this.rowData.organisation.taxId.toString();
    }
    // console.log(this.rowData);

    // this.renderValue = this.value.toString().toUpperCase();
  }
}

@Component({
  template: `
    <span *ngIf="contactTypes.vendor">ผู้ขาย</span>
    <span *ngIf="contactTypes.vendor && contactTypes.customer">, </span>
    <span *ngIf="contactTypes.customer">ผู้รับซื้อ</span>
  `,
})
export class TableCellContactTypeRenderComponent implements ViewCell, OnInit {
  renderTypeValue: string;
  renderValue: string;

  contactTypes: {
    vendor: boolean;
    customer: boolean;
    // supplier: boolean;
  };

  @Input() value: string | number;
  @Input() rowData: Contacts;

  ngOnInit() {
    this.contactTypes = this.rowData.contactType;
    // console.log(this.rowData);
    // this.renderValue = this.value.toString().toUpperCase();
  }
}

@Component({
  template: `
    <li *ngFor="let contact of contacts" style="list-style-type: none;">
      {{ contact.type }} : {{ contact.value }}
    </li>
  `,
})
export class TableCellSuppliersContactRenderComponent
  implements ViewCell, OnInit {
  renderTypeValue: string;
  renderValue: string;

  contacts: {
    type: 'phone' | 'email' | 'facebook' | 'line';
    value: String;
  }[];

  @Input() value: string | number;
  @Input() rowData: Contacts;

  ngOnInit() {
    this.contacts = this.rowData.contact;
    // console.log(this.rowData);
    // this.renderValue = this.value.toString().toUpperCase();
  }
}
