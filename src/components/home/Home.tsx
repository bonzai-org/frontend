import { bonsaiCardData } from '../../bonsaiProfDummyData';
import styles from './Home.module.css';
import BonsaiCard from '../bonsaiCard/BonsaiCard';

export default function Home() {
  return (
    <>
      <BonsaiCard cardData={bonsaiCardData} />
      <hr className={styles.cardDivider} />
      <BonsaiCard cardData={bonsaiCardData} />
      <hr className={styles.cardDivider} />
      <BonsaiCard cardData={bonsaiCardData} />
    </>
  );
}
