import styles from './UserIcon.module.css';
import { User } from '../../interfaces';

function UserIcon({ user }: { user: User }) {
  return (
    <div>
      <button className={styles.userIconContainer}>
        <img
          src={
            user.profilePhoto 
          }
          className={styles.userIcon}
          alt="user avatar"
        />

        <a className={styles.userLink}>{user.username}</a>
      </button>
    </div>
  );
}

export default UserIcon;
