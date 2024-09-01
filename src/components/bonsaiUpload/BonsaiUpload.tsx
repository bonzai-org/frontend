import { useState } from 'react';
import BonsaiDataForm from '../bonsaiDataForm/BonsaiDataForm';
import BonsaiChapterForm from '../bonsaiChapterForm/BonsaiChapterForm';
import BonsaiSubmitForm from '../bonsaiSubmitForm/BonsaiSubmitForm';
import styles from './BonsaiUpload.module.css';
import { Bonsai, BonsaiChapterFile } from '../../interfaces';
import { userData } from '../../bonsaiProfDummyData';

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
    console.log(bonsaiChapterArr);
    if (bonsaiChapterArr.length > 0) {
      setCurrentForm('submit');
    } else {
      setCurrentForm('chapter');
    }
    console.log('bonsai data: ', bonsaiData);
  };

  const handleChapterSubmit = (chapter: BonsaiChapterFile, destinationForm: 'chapter' | 'submit') => {
    if (bonsaiChapterIndex !== null) {
      const newChapterArr = [...bonsaiChapterArr];
      newChapterArr[bonsaiChapterIndex] = chapter;
      setBonsaiChapterArr(newChapterArr);
      setBonsaiChapterIndex(null);
    } else {
      setBonsaiChapterArr([...bonsaiChapterArr, chapter]);
    }
    setCurrentForm(destinationForm);
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
          <BonsaiDataForm onSubmit={handleDataSubmit} bonsaiData={bonsaiData} userData={bonsaiData.user} />
        ) : (
          <BonsaiDataForm onSubmit={handleDataSubmit} userData={userData} />
        ))}
      {currentForm === 'chapter' &&
        (bonsaiChapterIndex !== null ? (
          <BonsaiChapterForm
            onSubmit={handleChapterSubmit}
            chapter={bonsaiChapterArr[bonsaiChapterIndex]}
            canSkip = {bonsaiChapterArr.length > 0}
            goBack={() => setCurrentForm('submit')}
          />
        ) : (
          <BonsaiChapterForm onSubmit={handleChapterSubmit} canSkip = {bonsaiChapterArr.length > 0}
          goBack={() => setCurrentForm('submit')}/>
        ))}
      {currentForm === 'submit' && bonsaiData && (
        <BonsaiSubmitForm
          bonsaiData={bonsaiData}
          bonsaiChapterArr={bonsaiChapterArr}
          onAddNewChapter={() => setCurrentForm('chapter')}
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