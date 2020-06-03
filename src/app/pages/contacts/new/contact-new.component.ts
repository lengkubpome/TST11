import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
})
export class ContactNewComponent implements OnInit {
  @Input() title: string;

  constructor(protected ref: NbDialogRef<ContactNewComponent>) {}

  ngOnInit(): void {}

  cancel() {
    this.ref.close();
  }

  submit(name: any) {
    this.ref.close(name);
  }
}
