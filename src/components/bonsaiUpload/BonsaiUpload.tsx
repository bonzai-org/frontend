import { useState, useContext, useEffect } from 'react';
import BonsaiDataForm from '../bonsaiDataForm/BonsaiDataForm';
import BonsaiChapterForm from '../bonsaiChapterForm/BonsaiChapterForm';
import BonsaiSubmitForm from '../bonsaiSubmitForm/BonsaiSubmitForm';
import styles from './BonsaiUpload.module.css';
import { BonsaiData, BonsaiChapterFile } from '../../interfaces/uploadBonsai';
import { CreateBonsaiPayload } from '../../interfaces/requests';
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
import { postBonsai } from '../../fetchHelpers/fetchBonsai';


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
  }, [username]);

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
  const handleDeleteChapter = (index: number) => {
    const newChapterArr = bonsaiChapterArr.filter((_, i) => i !== index);
    if (newChapterArr.length === 0) {
      handleErrSet('Please add at least one chapter');
    }
    setBonsaiChapterArr(newChapterArr);
  };

  const handleErrSet = (err: string | null) => {
    setError(err);
    setTimeout(() => {
      setError(null);
    }, 5000); // Clear error after 5 seconds
  }

  const handleSubmitBonsai = async () => {
    if (!bonsaiData?.geoLocation || !bonsaiData?.hardinessZone || !bonsaiData?.species) {
      handleErrSet('Please fill out all required bonsai data fields');
      return;
    }
    if (bonsaiChapterArr.length === 0) {
      handleErrSet('Please add at least one chapter');
      return;
    }
    const bonsaiPayload: CreateBonsaiPayload = { ...bonsaiData, bonsaiChapters: bonsaiChapterArr };
    const response = await postBonsai(bonsaiPayload);
    if (response.status !== 204) {
      handleErrSet('Failed to upload');
    };
  }

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
            canSkip={bonsaiChapterArr.length > 0}
            goBack={() => setCurrentForm('submit')}
            setErr={handleErrSet}
          />
        ) : (
          <BonsaiChapterForm onSubmit={handleChapterSubmit} canSkip={bonsaiChapterArr.length > 0} setErr={handleErrSet}
            goBack={() => setCurrentForm('submit')} />
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