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
}

const BonsaiSubmitForm: React.FC<BonsaiSubmitFormProps> = ({ bonsaiData, bonsaiChapterArr }) => {
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
      <button onClick={() => {/* Redirect to BonsaiDataForm for editing */}}>Edit Bonsai Data</button>
      <h2>Bonsai Chapters</h2>
      {bonsaiChapterArr.map((chapter, index) => (
        <div key={index}>
          {chapter.photos[0] && (
            <img src={URL.createObjectURL(chapter.photos[0]!)} alt={`Chapter ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          )}
          <button onClick={() => {/* Redirect to bonsaiChapterForm for editing */}}>Edit Chapter</button>
        </div>
      ))}
      <button onClick={() => {/* Add new bonsai chapter logic */}}>Add New Chapter</button>
      <hr />
      <button onClick={() => {/* Discard bonsai logic */}}>Discard Bonsai</button>
      <button onClick={() => {/* Submit bonsai logic */}}>Submit Bonsai</button>
    </div>
  );
};

export default BonsaiSubmitForm;