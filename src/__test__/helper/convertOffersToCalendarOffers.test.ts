import { convertOffersToCalendarOffers } from "../../helpers";
import { Offer } from "../../types";

const classicOffers: Offer[] = [{
  available: false,
  coach: 1,
  date_start: "2021-07-31T09:00:07+02:00",
  duration_minute: 60,
  establishment: 1,
  full: false,
  id: 1,
  level: 1,
  meta_activity: 1,
  bookings: [],
}];

const twoDaySpanOffer: Offer[] = [{
  available: false,
  coach: 1,
  date_start: "2021-07-31T09:00:07+02:00",
  duration_minute: 1440,
  establishment: 1,
  full: false,
  id: 1,
  level: 1,
  meta_activity: 1,
  bookings: [],
}];

test("work on empty array", () => {
  const offers = convertOffersToCalendarOffers([]);

  expect(offers).toEqual([]);
});

test("work on one classic offer", () => {
  const offers = convertOffersToCalendarOffers(classicOffers);

  expect(offers).toEqual([{
    id: "1",
    title: "",
    start: "2021-07-31T09:00:07+02:00",
    end: "2021-07-31T08:00:07.000Z",
    extendedProps: classicOffers[0]
  }]);
});

test("work when the start and end date ar not on the same day", () => {
  const offers = convertOffersToCalendarOffers(twoDaySpanOffer);

  expect(offers).toEqual([{
    id: "1",
    title: "",
    start: "2021-07-31T09:00:07+02:00",
    end: "2021-08-01T07:00:07.000Z",
    extendedProps: twoDaySpanOffer[0]
  }]);
});

export default convertOffersToCalendarOffers;