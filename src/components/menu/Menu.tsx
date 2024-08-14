import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';

interface User {
  avatar: string;
  username: string;
  fullname: string;
}

interface MenuProps {
  user: User;
  menuToggle: () => void;
}

export default function Menu({ user, menuToggle }: MenuProps) {
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
      <hr />
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
    </div>
  );
}
