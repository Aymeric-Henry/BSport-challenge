import { User } from "../../types";
import styles from "./Avatar.module.scss";

const Avatar = (props: {
  user: User;
}) => {
  const { user } = props;

  return (
    <div className={styles.avatar}>
      <img src={user.photo} className={styles.picture} alt="avatar"/>
      <div>
        {user?.name}
      </div>
    </div>
  )
}

export default Avatar;
