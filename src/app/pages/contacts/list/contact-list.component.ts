import { Component, OnInit, Input } from '@angular/core';
// import { NbDialogService } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { Contacts } from '../../../@core/models/contacts.model';
import { DummyContact } from '../../../@core/data/contact';
import { NbDialogService } from '@nebular/theme';
import { ContactNewComponent } from '../new/contact-new.component';

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
        renderComponent: TableCellSuppliersNameRenderComponent,
      },
      contactType: {
        title: 'ประเภท',
        type: 'custom',
        renderComponent: TableCellContactTypeRenderComponent,
        compareFunction: (direction: any, a: object, b: object) => {
          // Converting strings to lowercase
          // const first = typeof a === 'string' ? a.toLowerCase() : a;
          // const second = typeof b === 'string' ? b.toLowerCase() : b;
          const first = [];
          const second = [];

          // tslint:disable-next-line: forin
          for (const key in a) {
            if (a[key]) first.push(key);
            if (b[key]) second.push(key);
          }
          // console.log(first);
          // console.log(second);

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        },
      },

      contact: {
        title: 'ช่องทางติดต่อ',
        type: 'custom',
        renderComponent: TableCellSuppliersContactRenderComponent,
        compareFunction: (direction: any, a: any, b: any) => {
          // Converting strings to lowercase
          const first = typeof a === 'string' ? a.toLowerCase() : a;
          const second = typeof b === 'string' ? b.toLowerCase() : b;

          console.log(first < second);

          if (first < second) {
            return -1 * direction;
          }
          if (first > second) {
            return direction;
          }
          return 0;
        },
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

  constructor(private dialogService: NbDialogService) {
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
  openCreateProduct(): void {
    this.dialogService
      .open(ContactNewComponent, {
        context: {
          title: 'เพิ่มผู้ติดต่อ',
        },
        closeOnBackdropClick: false,
<<<<<<< HEAD
        closeOnEsc: true,
=======
        closeOnEsc: false,
>>>>>>> 2b3f3b62e732f2618a4549445ba8cdb9cac969f5
      })
      .onClose.subscribe((res: any) => {
        if (res) {
          // this.data2 = [...this.data2, res];
          // this.source.load(this.data2);
          console.log('Create product success');
        }
      });

    // this.router.navigate(['/pages/contacts/test']);
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
                      'ผู้จำหน่าย'.indexOf(tmp.toUpperCase()) !== -1
                    ) {
                      return true;
                    }
                  } else if (key === 'customer' && fieldValue[key]) {
                    if (
                      'CUSTOMER'.indexOf(tmp.toUpperCase()) !== -1 ||
                      'ลูกค้า'.indexOf(tmp.toUpperCase()) !== -1
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

  setSortTable() {}
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
    <span *ngIf="contactTypes.vendor">ผู้จำหน่าย</span>
    <span *ngIf="contactTypes.vendor && contactTypes.customer">, </span>
    <span *ngIf="contactTypes.customer">ลูกค้า</span>
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
