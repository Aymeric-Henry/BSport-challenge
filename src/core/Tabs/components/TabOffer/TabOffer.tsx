import { Avatar } from "../../../../components/Avatar";
import { levelToReadableLevel } from "../../../../helpers";
import { useGetActivity, useGetCoach, useGetEstablishment, useGetOffer } from "../../../../hooks";
import { Booking } from "./components/Booking";
import styles from "./TabOffer.module.scss";

const TabOffer = (props: {
  offerId: number;
}) => {
  const { offerId } = props;

  const { data: offer } = useGetOffer(offerId);
  const { data: activity } = useGetActivity(offer?.meta_activity)
  const { data: coach } = useGetCoach(offer?.coach)
  const { data: establishment } = useGetEstablishment(offer?.establishment)

  return (
    <div className={styles.tabOffer}>
      <div className={styles.background} style={{
        backgroundImage: `url(${activity?.cover_main})`,
      }} />
      <div className={styles.content}>
        <div className={styles.title}>
          {activity?.name}
        </div>
        <div className={styles.coach}>
          <div > {"Coach:"}
          </div>
          {coach && <Avatar user={coach?.user} />}
        </div>
        <div className={styles.level}>
          {`Level: ${levelToReadableLevel(offer?.level)}`}
        </div>
        {establishment?.location && <div className={styles.location}>
          {`Location: ${establishment?.title}`}
        </div>}
        <div className={styles.booking}>
          <div>{"Booking"}</div>
          {offer?.bookings.map((bookingId) => (
            <Booking bookingId={bookingId} key={bookingId} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TabOffer;
