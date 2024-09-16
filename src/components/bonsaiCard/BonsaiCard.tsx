import { useNavigate } from 'react-router-dom';
import UserIcon from '../userIcon/UserIcon';
import styles from './BonsaiCard.module.css';
import { Bonsai } from '../../interfaces/bonsai';
import { useState, useEffect } from 'react';

function BonsaiCard({ bonsai }: { bonsai: Bonsai }) {
  const navigate = useNavigate();
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNextChapter = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentChapterIndex(
        (prevIndex) => (prevIndex + 1) % bonsai.bonsaiChapters.length
      );
    }
  };

  const handlePrevChapter = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (bonsai && !isProcessing) {
      setIsProcessing(true);
      setCurrentChapterIndex(
        (prevIndex) =>
          (prevIndex - 1 + bonsai.bonsaiChapters.length) %
          bonsai.bonsaiChapters.length
      );
    }
  };

  const handleCardClick = () => {
    navigate(`/bonsai/${bonsai.id}`);
  };

  useEffect(() => {
    if (bonsai) {
      setIsProcessing(false);
    }
  }, [currentChapterIndex, bonsai]);

  return (
    <div className={styles.cardContainer} onClick={handleCardClick}>
      <div className={styles.bonsaiInfoContainer}>
        <UserIcon user={{ username: bonsai.user.username }} />
        <div className={styles.bonsaiInfoCell}>
          <p>Species: </p>
          <p>{bonsai.species}</p>
        </div>

        <div className={styles.bonsaiInfoCell}>
          <p>Style: </p>
          <p>{bonsai.style}</p>
        </div>

        <div className={styles.bonsaiInfoCell}>
          <p>Location: </p>
          <p>{bonsai.geoLocation}</p>
        </div>
      </div>
      <div className={styles.imageFrame}>
        <button
          className={styles.chapterButton}
          onClick={handlePrevChapter}
          disabled={isProcessing || bonsai.bonsaiChapters.length === 0}
        >
          {'<'}
        </button>
        <img
          onClick={(e) => e.stopPropagation()}
          className={styles.image}
          src={bonsai.bonsaiChapters[currentChapterIndex].photoUrls[0]}
          alt=""
        />
        <button
          className={styles.chapterButton}
          onClick={handleNextChapter}
          disabled={isProcessing || bonsai.bonsaiChapters.length === 0}
        >
          {'>'}
        </button>
      </div>

      <div className={styles.chapterInfo}>
        <p className={styles.chapterDate}>
          {bonsai.bonsaiChapters[currentChapterIndex].date.toDateString()}
        </p>
        <div className={styles.captionContainer}>
          <p className={styles.chapterCaption}>
            {bonsai.bonsaiChapters[currentChapterIndex].caption}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BonsaiCard;
