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
      <div className={styles.headerContainer}>
        <UserIcon username={bonsaiCardData.user} userId={'1'} />
        <div className={styles.bonsaiInfoContainer}>
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
      </div>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={cardData.photoUrl} alt="" />
      </div>
      <hr />
    </div>
  );
}

export default BonsaiCard;
