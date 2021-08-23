import { Offer } from "../types";

const convertOffersToCalendarOffers = (offers: Offer[]) => {
  return  offers.map(offer => {
    const end = new Date (offer.date_start);
    end.setMinutes(offer.duration_minute)
    return {
      id: `${offer.id}`,
      title: "",
      start: offer.date_start,
      end: end.toISOString(),
      extendedProps: offer
    }
  });
}

export default convertOffersToCalendarOffers;