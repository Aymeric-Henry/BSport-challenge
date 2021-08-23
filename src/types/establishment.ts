export type Establishment = {
  title: string;
  cover: string;
  location: Location;
}

export type Location = {
  address: string;
  city: string;
  zipcode: string;
  country: string;
}