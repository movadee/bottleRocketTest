// TODO: confirm optional/mandatory fields
export interface IRestaurant {
	name: string;
	backgroundImageURL: string;
	category: string;
	contact: IContact | null;
	location: ILocation;
}

interface IContact {
	phone: string;
	formattedPhone: string;
	twitter?: string;
	facebook?: string;
	facebookUsername?: string;
	facebookName?: string;
}

interface ILocation {
	address: string;
	crossStreet?: string;
	lat: number;
	lng: number;
	postalCode?: string;
	cc: string;
	city: string;
	state: string;
	country: string;
	formattedAddress: string[];
}
