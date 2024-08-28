import { bonsaiData } from '../../bonsaiProfDummyData';
import styles from './Home.module.css';
import BonsaiCard from '../bonsaiCard/BonsaiCard';

export default function Home() {
  return (
    <>
      <BonsaiCard bonsai={bonsaiData} />
      <hr className={styles.cardDivider} />
      <BonsaiCard bonsai={bonsaiData} />
      <hr className={styles.cardDivider} />
      <BonsaiCard bonsai={bonsaiData} />
      <hr className={styles.cardDivider} />
    </>
  );
}
