import { useState } from 'react';
import BonsaiDataForm from '../bonsaiDataForm/BonsaiDataForm';
import BonsaiChapterForm from '../bonsaiChapterForm/BonsaiChapterForm';
import BonsaiSubmitForm from '../bonsaiSubmitForm/BonsaiSubmitForm';
import styles from './BonsaiUpload.module.css';
import { Bonsai, BonsaiChapterFile } from '../../interfaces';

function BonsaiUpload() {
  const [bonsaiData, setBonsaiData] = useState<Bonsai | null>(null);
  const [bonsaiChapterArr, setBonsaiChapterArr] = useState<BonsaiChapterFile[]>([]);
  const [currentForm, setCurrentForm] = useState<'data' | 'chapter' | 'submit'>(
    'data'
  );
  const [bonsaiChapterIndex, setBonsaiChapterIndex] = useState<null | number>(
    null
  );

  const handleDataSubmit = (data: Bonsai) => {
    setBonsaiData(data);
    setCurrentForm('chapter');
    console.log('bonsai data: ', bonsaiData);
  };

  const handleChapterSubmit = (chapter: BonsaiChapterFile) => {
    if (bonsaiChapterIndex !== null) {
      const newChapterArr = [...bonsaiChapterArr];
      newChapterArr[bonsaiChapterIndex] = chapter;
      setBonsaiChapterArr(newChapterArr);
      setBonsaiChapterIndex(null);
    } else {
      setBonsaiChapterArr([...bonsaiChapterArr, chapter]);
    }
    setCurrentForm('submit');
  };

  const handleAddNewChapter = () => {
    setCurrentForm('chapter');
  };

  const handleEditData = () => {
    setCurrentForm('data');
  };

  const handleEditChapter = (index: number) => {
    setBonsaiChapterIndex(index);
    setCurrentForm('chapter');
  };

  const handleDiscardBonsai = () => {
    setBonsaiData(null);
    setBonsaiChapterArr([]);
    setCurrentForm('data');
  };

  const handleSubmitBonsai = () => {
    console.log('Submitting Bonsai:', bonsaiData, bonsaiChapterArr);
  };

  const handleDeleteChapter = (index: number) => {
    const newChapterArr = bonsaiChapterArr.filter((_, i) => i !== index);
    setBonsaiChapterArr(newChapterArr);
  };

  return (
    <div className={styles.container}>
      {currentForm === 'data' &&
        (bonsaiData !== null ? (
          <BonsaiDataForm onSubmit={handleDataSubmit} bonsaiData={bonsaiData} />
        ) : (
          <BonsaiDataForm onSubmit={handleDataSubmit} />
        ))}
      {currentForm === 'chapter' &&
        (bonsaiChapterIndex !== null ? (
          <BonsaiChapterForm
            onSubmit={handleChapterSubmit}
            chapter={bonsaiChapterArr[bonsaiChapterIndex]}
          />
        ) : (
          <BonsaiChapterForm onSubmit={handleChapterSubmit} />
        ))}
      {currentForm === 'submit' && bonsaiData && (
        <BonsaiSubmitForm
          bonsaiData={bonsaiData}
          bonsaiChapterArr={bonsaiChapterArr}
          onAddNewChapter={handleAddNewChapter}
          onEditData={handleEditData}
          onEditChapter={handleEditChapter}
          onDiscardBonsai={handleDiscardBonsai}
          onSubmitBonsai={handleSubmitBonsai}
          onDeleteChapter={handleDeleteChapter}
        />
      )}
    </div>
  );
}

export default BonsaiUpload;
