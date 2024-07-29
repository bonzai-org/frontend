import React from 'react';

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

interface BonsaiSubmitFormProps {
  bonsaiData: BonsaiData;
  bonsaiChapterArr: BonsaiChapter[];
  onAddNewChapter: () => void;
  onEditData: () => void;
  onEditChapter: (index: number) => void;
  onDiscardBonsai: () => void;
  onSubmitBonsai: () => void;
}

const BonsaiSubmitForm: React.FC<BonsaiSubmitFormProps> = ({
  bonsaiData,
  bonsaiChapterArr,
  onAddNewChapter,
  onEditData,
  onEditChapter,
  onDiscardBonsai,
  onSubmitBonsai
}) => {
  return (
    <div>
      <h2>Bonsai Data</h2>
      <div>
        <strong>Hardiness Zone:</strong> {bonsaiData.hardiness_zone}
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
      <button onClick={onEditData}>Edit Bonsai Data</button>
      <h2>Bonsai Chapters</h2>
      {bonsaiChapterArr.map((chapter, index) => (
        <div key={index}>
          {chapter.photos[0] && (
            <img src={URL.createObjectURL(chapter.photos[0]!)} alt={`Chapter ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          )}
          <button onClick={() => onEditChapter(index)}>Edit Chapter</button>
        </div>
      ))}
      <button onClick={onAddNewChapter}>Add New Chapter</button>
      <hr />
      <button onClick={onDiscardBonsai}>Discard Bonsai</button>
      <button onClick={onSubmitBonsai}>Submit Bonsai</button>
    </div>
  );
};

export default BonsaiSubmitForm;