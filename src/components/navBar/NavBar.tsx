import { useState, useRef, useEffect } from 'react';
import Menu from '../menu/Menu';
import styles from './NavBar.module.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.container}>
      <button className={styles.logoContainer}>
        <img
          src={
            'https://res.cloudinary.com/dscsiijis/image/upload/v1721604220/logo_yhqcc5.jpg'
          }
          className={styles.logo}
          alt="Bonsai Book Logo"
        />
        <a className={styles.bonsaiLink}>Bonsai Book</a>
      </button>

      <form className={styles.searchBar}>
        <button type="submit" className={styles.searchIcon}>
          🔍
        </button>
        <input
          type="text"
          placeholder="Search Bonsai Book"
          className={styles.searchInput}
        />
      </form>
      <button className={styles.userIconContainer} onClick={handleMenuToggle}>
        <img
          src={
            'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
          }
          className={styles.userIcon}
          alt="user avatar"
        />
      </button>

      {isMenuOpen && (
        <div ref={menuRef} className={styles.menu}>
          <Menu
            user={{
              username: 'jNakster',
              fullname: 'John Naka',
              avatar:
                'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
            }}
            menuToggle={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default NavBar;
