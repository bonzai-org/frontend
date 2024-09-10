import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import { UserIcon } from '../../interfaces';

export default function Menu({
  userIcon,
  menuToggle
}: {
  userIcon: UserIcon;
  menuToggle: () => void;
}) {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    menuToggle();
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {userIcon.profilePhoto ? (
          <img
            src={userIcon.profilePhoto}
            className={styles.userIcon}
            alt="Profile"
          />
        ) : (
          <div className={styles.userIcon}>
            {userIcon.username
              ? userIcon.username.charAt(0).toUpperCase()
              : '😊'}
          </div>
        )}
        <div className={styles.userInfo}>
          <p className={styles.username}>{userIcon.username}</p>
        </div>
        <button onClick={menuToggle} className={styles.exitButton}>
          X
        </button>
      </div>
      <hr className={styles.divider} />
      <div
        onClick={() => handleLinkClick('/upload')}
        className={styles.menuItem}
      >
        Upload
      </div>
      <div
        onClick={() => handleLinkClick('/login')}
        className={styles.menuItem}
      >
        Auth
      </div>
      <div onClick={() => handleLinkClick('/')} className={styles.menuItem}>
        Home
      </div>
      <div
        onClick={() => handleLinkClick('/about')}
        className={styles.menuItem}
      >
        About
      </div>
    </div>
  );
}
