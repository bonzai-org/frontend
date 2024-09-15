import styles from './UserIcon.module.css';
import { UserPartial } from '../../interfaces/user';

function UserIcon({ user }: { user: UserPartial }) {
  return (
    <div>
      <button className={styles.userIconContainer}>

              {user.profilePhoto ? (
                <img
                  src={user.profilePhoto}
                  className={styles.userIcon}
                  alt="User icon"
                />
              ) : (
                <div className={`${styles.userIcon} ${styles.userInitial}`}>
                  {user.username.charAt(0).toUpperCase()}
                </div>
              )}
        <a className={styles.userLink}>{user.username}</a>
      </button>
    </div>
  );
}

export default UserIcon;
