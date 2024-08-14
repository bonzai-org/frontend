import { bonsaiCardData } from '../../bonsaiProfDummyData';
import BonsaiCard from '../bonsaiCard/BonsaiCard';

export default function Home() {
  return (
    <>
      <BonsaiCard cardData={bonsaiCardData} />
      <BonsaiCard cardData={bonsaiCardData} />
      <BonsaiCard cardData={bonsaiCardData} />
    </>
  );
}
