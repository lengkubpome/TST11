import { Contacts } from '../models/contacts.model';

export const DummyContact: Contacts[] = [
  {
    id: 'sxiiee',
    person: {
      id: '1409900464861',
      title: 'นาย',
      firstName: 'ก.ไก่1',
      lastName: 'นามสกุลหรู',
      address: {
        line: '165/81',
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
        line: '74/1',
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
