import React, { useState } from 'react';
import styles from '../bonsaiSubmitForm/BonsaSubmitForm.module.css';
import { BonsaiSubmitFormProps } from '../../interfaces';

const BonsaiSubmitForm: React.FC<BonsaiSubmitFormProps> = ({
  bonsaiData,
  bonsaiChapterArr,
  onAddNewChapter,
  onEditData,
  onEditChapter,
  onDiscardBonsai,
  onSubmitBonsai,
  onDeleteChapter
}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number[]>(bonsaiChapterArr.map(() => 0));

  const handleNextPhoto = (chapterIndex: number) => {
    setCurrentPhotoIndex((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[chapterIndex] = (newIndexes[chapterIndex] + 1) % bonsaiChapterArr[chapterIndex].photos.length;
      return newIndexes;
    });
  };

  const handlePrevPhoto = (chapterIndex: number) => {
    setCurrentPhotoIndex((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[chapterIndex] = (newIndexes[chapterIndex] - 1 + bonsaiChapterArr[chapterIndex].photos.length) % bonsaiChapterArr[chapterIndex].photos.length;
      return newIndexes;
    });
  };

  return (
    <div className={styles.container}>
      <h2>Bonsai Data</h2>
      <div>
        <strong>Hardiness Zone:</strong> {bonsaiData.hardinessZone}
      </div>
      <div>
        <strong>Height:</strong> {bonsaiData.height}
      </div>
      <div>
        <strong>Width:</strong> {bonsaiData.width}
      </div>
      <div>
        <strong>Nebari:</strong> {bonsaiData.nebari}
      </div>
      <div>
        <strong>Style:</strong> {bonsaiData.style}
      </div>
      <div>
        <strong>Species:</strong> {bonsaiData.species}
      </div>
      <button className={styles.btn} onClick={onEditData}>
        Edit Bonsai Data
      </button>
      <hr />
      <h2>Bonsai Chapters</h2>
      {bonsaiChapterArr.map((chapter, index) => (
        <div className={styles.chapWrap} key={index}>
          <div className={styles.chapterContainer}>
            {chapter.photos.length > 0 && (
              <div className={styles.previewContainer}>
                <div className={styles.imagePreview}>
                <button
                    className={styles.navBtn}
                    onClick={() => handlePrevPhoto(index)}
                    disabled={chapter.photos.length <= 1}
                  >
                    {'<'}
                  </button>
                  <div className={styles.chapterImgFrame}>
                  <img
                  className={styles.chapterImg}
                  src={URL.createObjectURL(chapter.photos[currentPhotoIndex[index]]!)}
                  alt={`Chapter ${index + 1}`}
                />
                  </div>
             
                  <button
                    className={styles.navBtn}
                    onClick={() => handleNextPhoto(index)}
                    disabled={chapter.photos.length <= 1}
                  >
                    {'>'}
                  </button>
                </div>
                
         
                <div className={styles.chapBtnContainer}>
                  <button
                    className={styles.btn}
                    onClick={() => onEditChapter(index)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles.btn}
                    onClick={() => onDeleteChapter(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className={styles.captionContainer}>
            <strong>Caption: </strong> {bonsaiChapterArr[index].caption}
          </div>
        </div>
      ))}
      <button className={styles.btn} onClick={onAddNewChapter}>
        Add New Chapter
      </button>
      <hr />
      <button className={styles.btn} onClick={onDiscardBonsai}>
        Discard Bonsai
      </button>
      <button className={styles.btn} onClick={onSubmitBonsai}>
        Submit Bonsai
      </button>
      <hr />
    </div>
  );
};

export default BonsaiSubmitForm;