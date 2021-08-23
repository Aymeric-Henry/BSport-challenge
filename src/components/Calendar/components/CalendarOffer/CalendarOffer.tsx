import React from 'react';
import {useGetActivity, useGetOffer, useOpenTab} from '../../../../hooks';
import styles from  "./CalendarOffer.module.scss"

const CalendarOffer = (props: {
  timePrefix: string,
  metaOfferId: number
}) => {
  const { timePrefix, metaOfferId } = props;

  const { data: offer } = useGetOffer(metaOfferId);
  const { data: activity } = useGetActivity(offer?.meta_activity)
  const openTab = useOpenTab();

  const openOfferTab = () => {
    openTab("offer", metaOfferId);
  }

	return (
		<div className={styles.offer} onClick={openOfferTab}>
      <div className={styles.prefix}>
        {timePrefix}
      </div>
      <div className={styles.name}>
        {activity?.name}
      </div>
    </div>
	);
}

export default CalendarOffer


