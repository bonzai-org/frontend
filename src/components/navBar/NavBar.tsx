import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.container}>
      <div>
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
      </div>

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
      <button className={styles.userIconContainer}>
        <img
          src={
            'https://res.cloudinary.com/dscsiijis/image/upload/v1721414755/IMG_3701_bkure4.jpg'
          }
          className={styles.userIcon}
          alt="user avatar"
        />
      </button>
    </div>
  );
}

export default NavBar;
