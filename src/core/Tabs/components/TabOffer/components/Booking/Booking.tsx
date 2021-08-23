import useGetBooking from "../../../../../../hooks/useGetBooking";
import styles from "./Booking.module.scss";

const Booking = (props: {
  bookingId: number;
}) => {
  const { bookingId } = props;

  const { data: booking } = useGetBooking(bookingId);

  return (
    <div className={styles.tabOffer}>
      {booking?.name}
    </div>
  )
}

export default Booking;