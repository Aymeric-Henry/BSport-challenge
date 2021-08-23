export type Offer = {
  available: boolean;
  coach: number;
  date_start: string;
  duration_minute: number;
  establishment: number;
  full: boolean;
  id: number;
  level: number;
  meta_activity: number;
  bookings: number[],
}