import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import { User } from '../../interfaces';

export default function Menu({
  user,
  menuToggle
}: {
  user: User;
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
        <img src={user.avatar} className={styles.userIcon} alt="user avatar" />
        <div className={styles.userInfo}>
          <p className={styles.username}>{user.username}</p>
          <p className={styles.userfullname}>{user.fullname}</p>
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
