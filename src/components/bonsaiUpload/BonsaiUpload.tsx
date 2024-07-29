import React, { useState } from "react";
import BonsaiDataForm from "../bonsaiDataForm/BonsaiDataForm";
import BonsaiChapterForm from "../bonsaiChapterForm/BonsaiChapterForm";
import BonsaiSubmitForm from "../bonsaiSubmitForm/BonsaiSubmitForm";
import style from "./BonsaiDataForm.module.css";

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
  const [currentForm, setCurrentForm] = useState<'data' | 'chapter' | 'submit'>('data');

  const handleDataSubmit = (data: BonsaiData) => {
    setBonsaiData(data);
    setCurrentForm('chapter');
  };

  const handleChapterSubmit = (chapter: BonsaiChapter) => {
    setBonsaiChapterArr([...bonsaiChapterArr, chapter]);
    setCurrentForm('submit');
  };

  const handleAddNewChapter = () => {
    setCurrentForm('chapter');
  };

  const handleEditData = () => {
    setCurrentForm('data');
  };
  
  const handleEditChapter = (index: number) => {
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
      {currentForm === 'data' && (
        <BonsaiDataForm onSubmit={handleDataSubmit} />
      )}
      {currentForm === 'chapter' && (
        <BonsaiChapterForm onSubmit={handleChapterSubmit} />
      )}
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