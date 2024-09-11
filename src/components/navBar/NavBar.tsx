import { useState, useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import styles from './NavBar.module.css';
import AuthContext from '../../AuthContext';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { username, profilePhoto } = useContext(AuthContext);

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
    <div className={styles.wrap}>
      <div className={styles.container}>
        <button className={styles.logoContainer}>
          <img
            src={
              'https://res.cloudinary.com/dscsiijis/image/upload/v1721604220/logo_yhqcc5.jpg'
            }
            className={styles.logo}
            alt="Bonsai Book Logo"
          />
          <Link to="/" className={styles.bonsaiLink}>
            Bonsai Book
          </Link>
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
        {username === null && (
          <button className={styles.loginButton}>
            <Link to={'/login'} className={styles.loginLink}>
              Login
            </Link>
          </button>
        )}
        <button className={styles.userIconContainer} onClick={handleMenuToggle}>
          {profilePhoto ? (
            <img
              src={profilePhoto}
              className={styles.userIcon}
              alt="User icon"
            />
          ) : (
            <div className={styles.userIcon}>
              {username ? username.charAt(0).toUpperCase() : '😊'}
            </div>
          )}
        </button>

        {isMenuOpen && (
          <div ref={menuRef} className={styles.menu}>
            <Menu
              userIcon={{ username, profilePhoto }}
              menuToggle={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
