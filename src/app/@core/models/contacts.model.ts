import { Car } from './car.model';

export interface Contacts {
	id: String;
	contactType?: {
		vendor: boolean;
		customer: boolean;
		// supplier: boolean;
	};
	primaryContactType: 'Person' | 'Organisation';
	person?: Person1;
	organisation?: Organisation;
	contact?: {
		type: 'phone' | 'email' | 'line';
		value: String;
	}[];
	bankAccount?: BankAccount;
	carList?: Car[];
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

export interface Person1 {
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
	line1: String;
	line2?: String;
	district: String;
	province: String;
	postCode: String;
}

export interface BankAccount {
	accountName: String;
	accountNumber: Number;
	bank: String;
}

export interface Contacts2 {
	id: String;
	profileImage?: URL;
	type: {
		vendor: boolean;
		customer: boolean;
		employee: boolean;
	};
	personal?: Person;
	business?: Business;
	shippingAddress?: Address;
	contactInfo?: {
		type: String; //'phone' | 'email' | 'line' | 'Web'
		value: String;
	}[];
	contactPersonal?: {
		fullName: String;
		position: String; //ตำแหน่ง
		contactInfo?: {
			type: String; //'phone' | 'email' | 'line' | 'Web'
			value: String;
		}[];
	};

	bankAccount?: BankAccount;
	carList?: Car[];
}

export interface Person {
	taxId: String;
	title: String;
	firstName: String;
	lastName: String;
	birthDate?: Date;
	address?: Address;
}

export interface Business {
	taxId: String;
	title: String;
	name: String;
	branchCode?: string;
	branchName?: String;
	address?: Address;
	localtion?: Location;
}
