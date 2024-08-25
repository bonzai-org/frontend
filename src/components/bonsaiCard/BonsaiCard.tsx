import { bonsaiCardData } from '../../bonsaiProfDummyData';
import UserIcon from '../userIcon/UserIcon';
import styles from './BonsaiCard.module.css';

interface BonsaiCardData {
  photoUrl: string;
  species: string;
  user: string;
  location: string;
  style: string;
}

function BonsaiCard({ cardData }: { cardData: BonsaiCardData }) {
  return (
    <div className={styles.cardContainer}>
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
        <img className={styles.image} src={cardData.photoUrl} alt="" />
      </div>
    </div>
  );
}

export default BonsaiCard;
