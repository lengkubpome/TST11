import { Car } from './car.model';

export interface Contacts {
  id: String;
  contactType?: {
    vendor: boolean;
    customer: boolean;
    // supplier: boolean;
  };
  primaryContactType: 'Person' | 'Organisation';
  person?: Person;
  organisation?: Organisation;
  carList?: Car[];
  contact?: {
    type: 'phone' | 'email' | 'line';
    value: String;
  }[];
}

export interface Organisation {
  taxId: String;
  title: String;
  name: String;
  address?: Address;
  certificateRef?: String;
  bankAccount?: BankAccount;
  // phone?: String;
  // email?: String;
}

export interface Person {
  id: String;
  title: String;
  firstName: String;
  lastName: String;
  birthDate?: Date;
  address?: Address;
  idCardRef?: String;
  bankAccount?: BankAccount;
  // phone?: String;
  // email?: String;
  // lineId?: String;
  // facebook?: String;
}

export interface Address {
  line: String;
  district: String;
  province: String;
  postCode: String;
}

export interface BankAccount {
  accountName: String;
  accountNumber: Number;
  bank: String;
}
