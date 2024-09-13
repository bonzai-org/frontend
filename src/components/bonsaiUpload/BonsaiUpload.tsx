import { useState, useContext, useEffect } from 'react';
import BonsaiDataForm from '../bonsaiDataForm/BonsaiDataForm';
import BonsaiChapterForm from '../bonsaiChapterForm/BonsaiChapterForm';
import BonsaiSubmitForm from '../bonsaiSubmitForm/BonsaiSubmitForm';
import styles from './BonsaiUpload.module.css';
import { BonsaiData, BonsaiChapterFile, BonsaiPayload } from '../../interfaces';
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';


function BonsaiUpload() {
  const [bonsaiData, setBonsaiData] = useState<BonsaiData | null>(null);
  const [bonsaiChapterArr, setBonsaiChapterArr] = useState<BonsaiChapterFile[]>([]);
  const [currentForm, setCurrentForm] = useState<'data' | 'chapter' | 'submit'>(
    'data'
  );
  const [bonsaiChapterIndex, setBonsaiChapterIndex] = useState<null | number>(
    null
  );
  const [error, setError] = useState<string | null>(null)
  const { username } = useContext(AuthContext);
  const navigate = useNavigate();

  // must be logged in to upload a bonsai
  useEffect(() => {
    if (!username) {
      navigate('/')
    }
  },[username]);

  const handleDataSubmit = (data: BonsaiData) => {
    setBonsaiData(data);
    if (bonsaiChapterArr.length > 0) {
      setCurrentForm('submit');
    } else {
      setCurrentForm('chapter');
    }
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
    if (!bonsaiData?.geoLocation || !bonsaiData?.hardinessZone || !bonsaiData?.species ) {
      handleErrSet('Please fill out all required bonsai data fields');
      return;
    }
    else if (bonsaiChapterArr.length === 0) {
      handleErrSet('Please add at least one chapter');
      return;
    }
    const bonsaiPayload: BonsaiPayload = {...bonsaiData, bonsaiChapters: bonsaiChapterArr};
    console.log('submitting bonsai: ', bonsaiPayload);
  };

  const handleDeleteChapter = (index: number) => {
    const newChapterArr = bonsaiChapterArr.filter((_, i) => i !== index);
    if (newChapterArr.length === 0) {
      handleErrSet('Please add at least one chapter');
    }
    setBonsaiChapterArr(newChapterArr);
  };

  const handleErrSet = (err: string | null) => {
    console.log('Setting error:', err);
    setError(err);
    setTimeout(() => {
      console.log('Clearing error');
      setError(null);
    }, 5000); // Clear error after 5 seconds
  }

  return (
    <div className={styles.container}>
  
      {currentForm === 'data' &&
        (bonsaiData !== null ? (
          <BonsaiDataForm onSubmit={handleDataSubmit} bonsaiData={bonsaiData}/>
        ) : (
          <BonsaiDataForm onSubmit={handleDataSubmit}/>
        ))}
      {currentForm === 'chapter' &&
        (bonsaiChapterIndex !== null ? (
          <BonsaiChapterForm
            onSubmit={handleChapterSubmit}
            chapter={bonsaiChapterArr[bonsaiChapterIndex]}
            canSkip = {bonsaiChapterArr.length > 0}
            goBack={() => setCurrentForm('submit')}
            setErr={handleErrSet}
          />
        ) : (
          <BonsaiChapterForm onSubmit={handleChapterSubmit} canSkip = {bonsaiChapterArr.length > 0} setErr={handleErrSet}
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
           {error && (
      <div className={styles.errorContainer}>
        <p className={styles.error}>{error}</p>
      </div>
    )}
    </div>
  );
}

export default BonsaiUpload;