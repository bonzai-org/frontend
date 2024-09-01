import React from 'react';
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
        <div  className={styles.chapterContainer}>
          {chapter.photos[0] && (
            <div className={styles.previewContainer}>
              <img
                className={styles.chapterImg}
                src={URL.createObjectURL(chapter.photos[0]!)}
                alt={`Chapter ${index + 1}`}
              />
           
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