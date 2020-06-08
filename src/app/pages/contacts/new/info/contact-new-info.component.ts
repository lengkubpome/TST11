import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-contact-new-info',
  templateUrl: './contact-new-info.component.html',
  styleUrls: ['./contact-new-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactNewInfoComponent implements OnInit {
  infoFormGroup: FormGroup;

  businessType: any = [
    { value: 'บริษัทจำกัด', name: 'บริษัทจำกัด' },
    { value: 'บริษัทมหาชนจำกัด', name: 'บริษัทมหาชนจำกัด' },
    { value: 'ห้างหุ้นส่วนจำกัด', name: 'ห้างหุ้นส่วนจำกัด' },
    { value: 'ร้านค้า', name: 'ร้านค้า' },
    { value: 'บุคคลธรรมดา', name: 'บุคคลธรรมดา' },
    { value: 'อื่นๆ', name: 'อื่นๆ' },
  ];
  businessBranch: any = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.infoFormGroup = this.fb.group({
      businessType: ['บริษัทจำกัด'],
      type: this.fb.group({
        customer: [true],
        vendor: [''],
      }),
      name: [''],
      branchCode: [''],
      individual: this.fb.group({
        prefixName: [''],
        firstName: [''],
        lastName: [''],
        birthDate: [''],
      }),
    });
  }
}
