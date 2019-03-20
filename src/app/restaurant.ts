export interface IRestaurant {
	name: string;
	backgroundImageURL?: string;
	category?: string;
	contact?: IContact;
	location?: ILocation;
}

export interface IContact {
	phone: string;
	formattedPhone: string;
	twitter: string;
}

export interface ILocation {
	address: string;
	crossStreet: string;
	lat: number;
	lng: number;
	postalCode: string;
	cc: string;
	city: string;
	state: string;
	country: string;
	formattedAddress: string[];
}
