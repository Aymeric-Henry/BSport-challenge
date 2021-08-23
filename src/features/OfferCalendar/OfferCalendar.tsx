import { DatesSetArg } from '@fullcalendar/react';
import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import { CalendarOffer } from '../../components/Calendar/components/CalendarOffer';
import { convertOffersToCalendarOffers, getFirstDayOfMonth, getLastDayOfMonth } from '../../helpers';
import { useGetOffers } from '../../hooks';

const OfferCalendar = () => {
  const [dateMin, setDateMin] = useState(getFirstDayOfMonth(new Date()));
  const [dateMax, setDateMax] = useState(getLastDayOfMonth(new Date()));

  const { data, isLoading } = useGetOffers({
    min_date: dateMin.toISOString().substring(0, 10),
    max_date: dateMax.toISOString().substring(0, 10),
  });

  const offers = convertOffersToCalendarOffers(data?.results ?? []);
  const handleDateChange = (dateInfo: DatesSetArg) => {
    setDateMin(getFirstDayOfMonth(dateInfo.view.currentStart))
    setDateMax(getLastDayOfMonth(dateInfo.view.currentStart))
  }

  const renderEvent = (info: {
		timeText: string,
		event: {
			extendedProps: any;
		}
  }) => <CalendarOffer timePrefix={info.timeText} metaOfferId={info.event.extendedProps.id} />

  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && (
        <Calendar
          initialDate={dateMin}
          events={offers}
          onDateChange={handleDateChange}
          renderEvent={renderEvent}
        />
      )}
    </>
  );
}

export default OfferCalendar;