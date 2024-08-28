import { bonsaiCardData } from '../../bonsaiProfDummyData';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../userIcon/UserIcon';
import styles from './BonsaiCard.module.css';
import { Bonsai } from '../../interfaces';

// TODO:
// Refactor to display leading photo
// from each chapter in a gallery

function BonsaiCard({ bonsai }: { bonsai: Bonsai }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/bonsai/${bonsai.id}`);
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <div className={styles.bonsaiInfoContainer}>
        <UserIcon user={{ username: bonsai.user }} />
        <div className={styles.bonsaiInfoCell}>
          <p>Species: </p>
          <p>{bonsai.species}</p>
        </div>

        <div className={styles.bonsaiInfoCell}>
          <p>Style: </p>
          <p>{bonsai.style}</p>
        </div>

        <div className={styles.bonsaiInfoCell}>
          <p>Location: </p>
          <p>{bonsai.geoLocation}</p>
        </div>
      </div>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={} alt="" />
      </div>
    </div>
  );
}

export default BonsaiCard;
