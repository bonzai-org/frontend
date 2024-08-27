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
        <div className={styles.pageContainer}>
          <h1>{`${bonsai.user}'s ${bonsai.species}`}</h1>
          <div className={styles.bonsaiDataContainer}>
            {bonsai.geoLocation && (
              <div className={styles.categoryContainer}>
                <label className={styles.categoryLabel}>Geo Location:</label>
                <p className={styles.categoryData}>{bonsai.geoLocation}</p>
              </div>
            )}
            {bonsai.style && (
              <div className={styles.categoryContainer}>
                <label className={styles.categoryLabel}>Style:</label>
                <p className={styles.categoryData}>{bonsai.style}</p>
              </div>
            )}
            {bonsai.height && (
              <div className={styles.categoryContainer}>
                <label className={styles.categoryLabel}>Height:</label>
                <p className={styles.categoryData}>{bonsai.height}</p>
              </div>
            )}
            {bonsai.width && (
              <div className={styles.categoryContainer}>
                <label className={styles.categoryLabel}>Width:</label>
                <p className={styles.categoryData}>{bonsai.width}</p>
              </div>
            )}
            {bonsai.nebari && (
              <div className={styles.categoryContainer}>
                <label className={styles.categoryLabel}>Nebari:</label>
                <p className={styles.categoryData}>{bonsai.nebari}</p>
              </div>
            )}
            <div className={styles.categoryContainer}>
              <label className={styles.categoryLabel}>Hardiness Zone:</label>
              <p className={styles.categoryData}>{bonsai.hardinessZone}</p>
            </div>
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
                <button
                  className={styles.galleryButton}
                  onClick={handlePrevPhoto}
                  disabled={isProcessing}
                >
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
                <button
                  className={styles.galleryButton}
                  onClick={handleNextPhoto}
                  disabled={isProcessing}
                >
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
