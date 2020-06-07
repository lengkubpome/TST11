import { Contacts, Contacts2 } from '../models/contacts.model';

export const DummyContact: Contacts[] = [
  {
    id: 'sxiiee',
    person: {
      id: '1409900464861',
      title: 'นาย',
      firstName: 'ก.ไก่1',
      lastName: 'นามสกุลหรู',
      address: {
        line1: '165/81',
        district: 'เมือง',
        postCode: '40000',
        province: 'ขอนแก่น',
      },
    },
    organisation: {
      taxId: '0405552000249',
      title: 'บริษัท',
      name: 'โกลด์ 2009',
      address: {
        line1: '74/1',
        district: 'เมือง',
        postCode: '40000',
        province: 'ขอนแก่น',
      },
    },
    contactType: {
      vendor: true,
      customer: true,
    },
    primaryContactType: 'Organisation',
    contact: [{ type: 'phone', value: '0868551701' }],
  },
  {
    id: 'vfsff',
    person: {
      id: '1409900464862',
      title: 'นาย',
      firstName: 'ก.ไก่2',
      lastName: 'นามสกุลหรู',
    },
    contact: [
      { type: 'phone', value: '0868551702' },
      { type: 'line', value: '0868551702' },
    ],
    primaryContactType: 'Person',
    contactType: {
      vendor: true,
      customer: false,
    },
  },
  {
    id: 'rqewe',
    person: {
      id: '1409900464863',
      title: 'นาย',
      firstName: 'ก.ไก่3',
      lastName: 'นามสกุลหรู',
    },
    contact: [
      { type: 'phone', value: '0868551703' },
      { type: 'line', value: '0868551703' },
    ],
    primaryContactType: 'Person',
    contactType: {
      vendor: true,
      customer: false,
    },
  },
  {
    id: '3qerqe',
    person: {
      id: '1409900464864',
      title: 'นาย',
      firstName: 'ก.ไก่4',
      lastName: 'นามสกุลหรู',
    },
    contact: [
      { type: 'phone', value: '0868551704' },
      { type: 'line', value: '0868551704' },
    ],
    primaryContactType: 'Person',
    contactType: {
      vendor: false,
      customer: true,
    },
  },
  {
    id: 'qwqw',
    person: {
      id: '1409900464865',
      title: 'นาย',
      firstName: 'ก.ไก่5',
      lastName: 'นามสกุลหรู',
    },
    contact: [
      { type: 'phone', value: '0868551705' },
      { type: 'line', value: '0868551705' },
    ],
    primaryContactType: 'Person',
    contactType: {
      vendor: true,
      customer: false,
    },
  },
];

export const DummyContact2: Contacts2[] = [
  {
    id: 'sxiiee',
    businessType: 'บริษัทจำกัด',
    branch: { code: '00000', name: 'สำนักงานใหญ่' },
    name: 'โกลด์ 2009',
    taxId: '1409900464861',
    type: { vendor: true, customer: false },
    address: {
      line1: '74/1',
      district: 'เมือง',
      postCode: '40000',
      province: 'ขอนแก่น',
    },
    shippingAddress: {
      line1: '74/1',
      district: 'เมือง',
      postCode: '40000',
      province: 'ขอนแก่น',
    },
    contactInfo: [{ type: 'phone', value: '0868551701' }],
    primaryContactInfo: {
      contactName: 'ก.ไก่1 นามสกุลหรู',
      contactInfo: [{ type: 'phone', value: '0868551701' }],
    },
  },
  {
    id: 'vfsff',
    businessType: 'บุคคลธรรมดา',
    name: 'ก.ไก่2 นามสกุลหรู',
    taxId: '1409900464862',
    type: { vendor: true, customer: true },
    individual: {
      prefixName: 'นาย',
      firstName: 'ก.ไก่2',
      lastName: 'นามสกุลหรู',
    },
    address: {
      line1: '135 หมู่7 ถ.มิตรภาพ ต.โนนท่อน',
      district: 'เมือง',
      postCode: '40000',
      province: 'ขอนแก่น',
    },
    shippingAddress: {
      line1: '135 หมู่7 ถ.มิตรภาพ ต.โนนท่อน',
      district: 'เมือง',
      postCode: '40000',
      province: 'ขอนแก่น',
    },
    contactInfo: [
      { type: 'phone', value: '0868551702' },
      { type: 'line', value: '0868551702' },
    ],
    primaryContactInfo: {
      officeName: 'หจก.ไทยสุทัศน์',
      contactName: 'เฮียเล้ง',
      contactInfo: [{ type: 'phone', value: '0868551701' }],
    },
  },
  {
    id: 'rqewe',
    businessType: 'บุคคลธรรมดา',
    name: 'ข.ไข่ มีเยอะแยะ',
    taxId: '1409900464863',
    type: { vendor: true, customer: true },
    individual: {
      prefixName: 'นาย',
      firstName: 'ข.ไข่',
      lastName: 'มีเยอะแยะ',
    },
    contactInfo: [
      { type: 'phone', value: '0868551703' },
      { type: 'line', value: '0868551703' },
    ],
  },
  {
    id: '3qerqe',
    businessType: 'บุคคลธรรมดา',
    name: 'แพท',
    taxId: '349004648633',
    type: { vendor: false, customer: true},
    individual: {
      prefixName: 'นางสาว',
      firstName: 'แพท',
      lastName: 'ลูกปอศิริ',
    },
    contactInfo: [
      { type: 'phone', value: '0868551704' },
      { type: 'line', value: '0868551704' },
    ],
  },
  {
    id: 'qwqw',
    businessType: 'บริษัทจำกัด',
    branch: { code: '00000', name: 'สำนักงานใหญ่' },
    name: 'ไทยสุทัศน์',
    taxId: '0403549000606',
    type: { vendor: false, customer: true},
    address: {
      line1: '135 หมู่ 7',
      district: 'เมือง',
      postCode: '40000',
      province: 'ขอนแก่น',
    },
    shippingAddress: {
      line1: '135 หมู่ 7',
      district: 'เมือง',
      postCode: '40000',
      province: 'ขอนแก่น',
    },
    contactInfo: [
      { type: 'phone', value: '0868551705' },
      { type: 'line', value: '0868551705' },
    ],
    primaryContactInfo: {
      contactName: 'ถิรตา แซ่ตั้ง',
      position: 'รองประธาน',
      contactInfo: [{ type: 'phone', value: '0868551701' }],
    },
  },
];
