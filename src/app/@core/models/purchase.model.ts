import { Car } from './car.model';
import { Contacts } from './contacts.model';

// ซื้อสินค้าทั่วไป
export interface Purchase {
  id: String;
  dateTime: Date;
  supplier: Contacts;
  payment: 'cash' | 'transfer';
  status: String;
  amount: Number;
  price: Number;
  vat?: Number;
  total: Number;
  remark?: String;
}

// การซื้อสินต้าหน้าร้าน
export interface PurchaseRawMaterial extends Purchase {
  car: Car;
  weighingIn: Weighing;
  weighingOut: Weighing;
  cutWeight?: Number;
  cutWeightNote?: String;
}

export interface Weighing {
  dateTime: Date;
  weight: Number;
}
