import { bonsaiCardData } from '../../bonsaiProfDummyData';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../userIcon/UserIcon';
import styles from './BonsaiCard.module.css';

interface BonsaiCardData {
  id: string;
  photoUrl: string;
  species: string;
  user: string;
  location: string;
  style: string;
}

function BonsaiCard({ cardData }: { cardData: BonsaiCardData }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/bonsai/${cardData.id}`);
  };

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <div className={styles.bonsaiInfoContainer}>
        <UserIcon user={{ username: bonsaiCardData.user }} />
        <div className={styles.bonsaiInfoCell}>
          <p>Species: </p>
          <p>{bonsaiCardData.species}</p>
        </div>

        <div className={styles.bonsaiInfoCell}>
          <p>Style: </p>
          <p>{bonsaiCardData.style}</p>
        </div>

        <div className={styles.bonsaiInfoCell}>
          <p>Location: </p>
          <p>{bonsaiCardData.location}</p>
        </div>
      </div>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={bonsaiCardData.photoUrl} alt="" />
      </div>
    </div>
  );
}

export default BonsaiCard;
