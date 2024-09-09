import { useEffect } from 'react';
import { bonsaiData } from '../../bonsaiProfDummyData';
import styles from './Home.module.css';
import BonsaiCard from '../bonsaiCard/BonsaiCard';
const APIBASE = 'localhost:3000/api/';

export default function Home() {
  return (
    <div className={styles.container}>
      <BonsaiCard bonsai={bonsaiData} />
      <hr className={styles.cardDivider} />
      <BonsaiCard bonsai={bonsaiData} />
      <hr className={styles.cardDivider} />
      <BonsaiCard bonsai={bonsaiData} />
      <hr className={styles.cardDivider} />
    </div>
  );
}
