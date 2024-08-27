import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bonsaiData } from '../../bonsaiProfDummyData';
import styles from './BonsaiPage.module.css';

interface BonsaiChapter {
  photoUrls: string[];
  date: Date;
  caption: string;
  bonsaiId: string;
}

interface Bonsai {
  id: string;
  user: string;
  species: string;
  geoLocation: string;
  style: string;
  height: string;
  width: string;
  nebari: string;
  hardinessZone: string;
  bonsaiChapters: BonsaiChapter[];
}

export default function BonsaiPage() {
  const { id } = useParams<{ id: string }>();
  const [bonsai, setBonsai] = useState<Bonsai | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    console.log('Fetching bonsai with ID: ', id);
    setBonsai(bonsaiData);
  }, [id]);

  const handleNextPhoto = () => {
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentChapterIndex(
        (prevIndex) => (prevIndex + 1) % bonsai.bonsaiChapters.length
      );
    }
  };

  const handlePrevPhoto = () => {
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentChapterIndex(
        (prevIndex) =>
          (prevIndex - 1 + bonsai.bonsaiChapters.length) %
          bonsai.bonsaiChapters.length
      );
    }
  };

  useEffect(() => {
    if (bonsai) {
      setIsProcessing(false);
    }
  }, [currentChapterIndex, bonsai]);

  return (
    <div>
      {bonsai && (
        <div>
          <p>Displaying details for bonsai with ID: {id}</p>
          <div className={styles.bonsaiData}>
            <p>Species: {bonsai.species}</p>
            <p>User: {bonsai.user}</p>
            {bonsai.geoLocation && <p>Geo Location: {bonsai.geoLocation}</p>}
            {bonsai.style && <p>Style: {bonsai.style}</p>}
            {bonsai.height && <p>Height: {bonsai.height}</p>}
            {bonsai.width && <p>Width: {bonsai.width}</p>}
            {bonsai.nebari && <p>Nebari: {bonsai.nebari}</p>}
            <p>Hardiness Zone: {bonsai.hardinessZone}</p>
          </div>
          {bonsai.bonsaiChapters.length > 0 && (
            <div className={styles.chapterContainer}>
              <h2> Chapter {`${currentChapterIndex + 1}`}</h2>
              <div className={styles.chapterInfo}>
                <p className={styles.chapterDate}>
                  {bonsai.bonsaiChapters[
                    currentChapterIndex
                  ].date.toDateString()}
                </p>
                <p className={styles.chapterCaption}>
                  {bonsai.bonsaiChapters[currentChapterIndex].caption}
                </p>
              </div>

              <div className={styles.imageGallery}>
                <button onClick={handlePrevPhoto} disabled={isProcessing}>
                  {'<'}
                </button>
                <div className={styles.imageFrame}>
                  <img
                    src={
                      bonsai.bonsaiChapters[currentChapterIndex].photoUrls[0]
                    }
                    alt={`Bonsai Chapter ${currentChapterIndex + 1} Photo`}
                    className={styles.chapterImage}
                    onLoad={() => setIsProcessing(false)}
                  />
                </div>
                <button onClick={handleNextPhoto} disabled={isProcessing}>
                  {'>'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
