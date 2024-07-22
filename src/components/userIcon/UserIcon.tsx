import styles from './UserIcon.module.css';

interface User {
  username: string;
}

function UserIcon({ user }: { user: User }) {
  return (
    <div>
      <button className={styles.userIconContainer}>
        <img
          src={
            'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
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
