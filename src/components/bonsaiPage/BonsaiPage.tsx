import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bonsaiData } from '../../bonsaiProfDummyData';
import styles from './BonsaiPage.module.css';
import { Bonsai } from '../../interfaces/bonsai';
import { getBonsai } from '../../fetchHelpers/fetchBonsai';

export default function BonsaiPage() {
  const { id } = useParams<{ id: string }>();
  const [bonsai, setBonsai] = useState<Bonsai | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setBonsai(bonsaiData);
    /*     fetchBonsaiData();
        async function fetchBonsaiData() {
          if (id) {
            const bonsai = await getBonsai(id);
            setBonsai(bonsai);
          }
        } */
  }, [id]);

  const handleNextChapter = () => {
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentChapterIndex(
        (prevIndex) => (prevIndex + 1) % bonsai.bonsaiChapters.length
      );
      setCurrentImageIndex(0); // Reset image index when chapter changes
    }
  };

  const handlePrevChapter = () => {
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentChapterIndex(
        (prevIndex) =>
          (prevIndex - 1 + bonsai.bonsaiChapters.length) %
          bonsai.bonsaiChapters.length
      );
      setCurrentImageIndex(0); // Reset image index when chapter changes
    }
  };

  const handleNextImage = () => {
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          bonsai.bonsaiChapters[currentChapterIndex].photoUrls.length
      );
    }
  };

  const handlePrevImage = () => {
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex -
            1 +
            bonsai.bonsaiChapters[currentChapterIndex].photoUrls.length) %
          bonsai.bonsaiChapters[currentChapterIndex].photoUrls.length
      );
    }
  };

  useEffect(() => {
    if (bonsai) {
      setIsProcessing(false);
    }
  }, [currentChapterIndex, currentImageIndex, bonsai]);

  return (
    <div>
      {bonsai && (
        <div className={styles.pageContainer}>
          <h1>{`${bonsai.user.username}'s ${bonsai.species}`}</h1>
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
              <div className={styles.chapterNav}>
                <button
                  className={styles.chapterButton}
                  onClick={handlePrevChapter}
                  disabled={isProcessing}
                >
                  {'<'}
                </button>
                <h2> Chapter {`${currentChapterIndex + 1}`}</h2>
                <button
                  className={styles.chapterButton}
                  onClick={handleNextChapter}
                  disabled={isProcessing}
                >
                  {'>'}
                </button>
              </div>

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
                {bonsai.bonsaiChapters[currentChapterIndex].photoUrls.length >
                  1 && (
                    <button
                      className={styles.imageButton}
                      onClick={handlePrevImage}
                      disabled={isProcessing}
                    >
                      {'<'}
                    </button>
                  )}

                <div className={styles.imageFrame}>
                  <img
                    src={
                      bonsai.bonsaiChapters[currentChapterIndex].photoUrls[
                      currentImageIndex
                      ]
                    }
                    alt={`Bonsai Chapter ${currentChapterIndex + 1} Photo`}
                    className={styles.chapterImage}
                    onLoad={() => setIsProcessing(false)}
                  />
                </div>
                {bonsai.bonsaiChapters[currentChapterIndex].photoUrls.length >
                  1 && (
                    <button
                      className={styles.imageButton}
                      onClick={handleNextImage}
                      disabled={isProcessing}
                    >
                      {'>'}
                    </button>
                  )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
