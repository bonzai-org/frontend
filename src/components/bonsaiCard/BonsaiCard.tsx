import styles from './BonsaiCard.module.css';
import { bonsaiCardData } from '../../bonsaiProfDummyData';

function BonsaiCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={bonsaiCardData.photoUrl} alt="" />
      </div>
    </div>
  );
}

export default BonsaiCard;
