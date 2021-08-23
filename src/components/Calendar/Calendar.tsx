import React from 'react';
import FullCalendar, { DatesSetArg, EventSourceInput } from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import styles from "./Calendar.module.scss";

const Calendar = (props: {
	events: EventSourceInput,
	initialDate: Date,
	renderEvent: (info: {
		timeText: string,
		event: {
			extendedProps: any;
		}
	}) => JSX.Element;
	onDateChange: (dateInfo: DatesSetArg) => void,
}) => {
	const { events, initialDate, renderEvent, onDateChange } = props;

	return (
		<div className={styles.calendar}>
			<FullCalendar
  			plugins={[ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin ]}
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
				}}
				eventContent={renderEvent}
				initialDate={initialDate}
				navLinks
				editable
				dayMaxEvents
				datesSet={onDateChange}
				events={events}
			/>
		</div>
	);
}

export default Calendar


