export interface Contact {
    id: number;
    name: string;
    username: string;
    email: string;
    company:  Company
    address: Address
    phone: string;
    website: string;
}

export interface Company{
        name:string;
        catchPhrase:string;
        bs:string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}
