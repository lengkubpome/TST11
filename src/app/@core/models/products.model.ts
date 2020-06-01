export interface Product {
	id: string;
	name: string;
	price: number;
	status: 'active' | 'inactive';
}

export interface ProductHistory {
	dateTime: Date;
	product: Product;
	event: 'edited' | 'delected';
}
