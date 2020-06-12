import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'ngx-contact-new-info',
	templateUrl: './contact-new-info.component.html',
	styleUrls: [ './contact-new-info.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactNewInfoComponent implements OnInit {
	infoFormGroup: FormGroup;

  businessTypes: any = [
    { value: 'บริษัทจำกัด', name: 'บริษัทจำกัด' },
    { value: 'บริษัทมหาชนจำกัด', name: 'บริษัทมหาชนจำกัด' },
    { value: 'ห้างหุ้นส่วนจำกัด', name: 'ห้างหุ้นส่วนจำกัด' },
    { value: 'ร้านค้า', name: 'ร้านค้า' },
    { value: 'บุคคลธรรมดา', name: 'บุคคลธรรมดา' },
    { value: 'อื่นๆ', name: 'อื่นๆ' },
  ];
  businessBranch = '';

	constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.infoFormGroup = this.fb.group({
      businessType: ['บริษัทจำกัด'],
      type: this.fb.group({
        customer: [true],
        vendor: [''],
      }),
      taxId: [''],
      name: [''],
      branchCode: ['', Validators.required],
      individual: this.fb.group({
        prefixName: [''],
        firstName: [''],
        lastName: [''],
        birthDate: [''],
      }),
      address: this.fb.group({
        line: [],
        subDistrict: [],
        district: [],
        province: [],
        postCode: [],
      }),
      shippingAddress: this.fb.group({
        line: [],
        subDistrict: [],
        district: [],
        province: [],
        postCode: [],
      }),
      phone: [],
    });
  }

  selectedBusinessType(event) {
    if (event !== 'บุคคลธรรมดา') {
      this.infoFormGroup.get('individual').reset();
    }
  }

  copyAddress(event) {
    if (event) {
      const address = this.infoFormGroup.get('address').value;
      console.log(address);
      this.infoFormGroup.get('shippingAddress').setValue(address);
    } else {
      this.infoFormGroup.get('shippingAddress').reset();
    }
  }

  selectedBranchCode(event) {
    this.businessBranch = event;
    this.infoFormGroup.get('branchCode').reset();
    if (event === 'headquarters') {
      this.infoFormGroup.get('branchCode').setValue('00000');
    } else {
      this.infoFormGroup.get('branchCode').setValue('');
    }
  }
}
