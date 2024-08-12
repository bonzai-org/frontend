import { useState } from 'react';
import BonsaiDataForm from '../bonsaiDataForm/BonsaiDataForm';
import BonsaiChapterForm from '../bonsaiChapterForm/BonsaiChapterForm';
import BonsaiSubmitForm from '../bonsaiSubmitForm/BonsaiSubmitForm';
import style from './BonsaiDataForm.module.css';

interface BonsaiData {
  hardiness_zone: string;
  height: number | '';
  width: number | '';
  nebari: number | '';
  style: string;
  species: string;
}

interface BonsaiChapter {
  photos: (File | null)[];
  caption: string;
  date: Date;
}

function BonsaiUpload() {
  const [bonsaiData, setBonsaiData] = useState<BonsaiData | null>(null);
  const [bonsaiChapterArr, setBonsaiChapterArr] = useState<BonsaiChapter[]>([]);
  const [currentForm, setCurrentForm] = useState<'data' | 'chapter' | 'submit'>(
    'data'
  );
  const [bonsaiChapterIndex, setBonsaiChapterIndex] = useState<null | number>(
    null
  );

  const handleDataSubmit = (data: BonsaiData) => {
    setBonsaiData(data);
    setCurrentForm('chapter');
    console.log('bonsai data: ', bonsaiData);
  };

  const handleChapterSubmit = (chapter: BonsaiChapter) => {
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

  return (
    <div>
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
        />
      )}
    </div>
  );
}

export default BonsaiUpload;
