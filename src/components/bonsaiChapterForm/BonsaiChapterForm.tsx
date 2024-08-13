import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface BonsaiChapter {
  photos: (File | null)[];
  caption: string;
  date: Date;
}

interface BonsaiChapterFormProps {
  onSubmit: (chapter: BonsaiChapter) => void;
  chapter?: BonsaiChapter;
}

const BonsaiChapterForm: React.FC<BonsaiChapterFormProps> = ({
  onSubmit,
  chapter
}) => {
  const [bonsaiChapter, setBonsaiChapter] = useState<BonsaiChapter>(
    chapter || { photos: [], caption: '', date: new Date() }
  );

  useEffect(() => {
    if (chapter) {
      setBonsaiChapter(chapter);
    }
  }, [chapter]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setBonsaiChapter({
        ...bonsaiChapter,
        photos: [...bonsaiChapter.photos, event.target.files[0]]
      });
    }
  };

  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBonsaiChapter({ ...bonsaiChapter, caption: event.target.value });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBonsaiChapter({ ...bonsaiChapter, date: new Date(event.target.value) });
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = bonsaiChapter.photos.filter((_, i) => i !== index);
    setBonsaiChapter({ ...bonsaiChapter, photos: newPhotos });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(bonsaiChapter);
    // Reset the form
    setBonsaiChapter({ photos: [], caption: '', date: new Date() });
  };

  const movePhoto = (dragIndex: number, hoverIndex: number) => {
    const draggedPhoto = bonsaiChapter.photos[dragIndex];
    const newPhotos = [...bonsaiChapter.photos];
    newPhotos.splice(dragIndex, 1);
    newPhotos.splice(hoverIndex, 0, draggedPhoto);
    setBonsaiChapter({ ...bonsaiChapter, photos: newPhotos });
  };

  const Photo = ({ photo, index }: { photo: File | null; index: number }) => {
    const [, ref] = useDrag({
      type: 'photo',
      item: { index }
    });

    const [, drop] = useDrop({
      accept: 'photo',
      hover: (item: { index: number }) => {
        if (item.index !== index) {
          movePhoto(item.index, index);
          item.index = index;
        }
      }
    });

    return (
      <div
        ref={(node) => ref(drop(node))}
        style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
      >
        <img
          src={URL.createObjectURL(photo!)}
          alt={`Preview ${index}`}
          style={{ maxWidth: '200px', maxHeight: '200px' }}
        />
        <button
          type="button"
          onClick={() => handleRemovePhoto(index)}
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          X
        </button>
      </div>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <form onSubmit={handleSubmit}>
        <h2>{chapter ? 'Edit Bonsai Chapter' : 'Add Bonsai Chapter'}</h2>
        <div>
          <label htmlFor="photo">Photo(s):</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            value={bonsaiChapter.caption}
            onChange={handleCaptionChange}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={bonsaiChapter.date.toISOString().split('T')[0]}
            onChange={handleDateChange}
          />
        </div>
        <button type="submit">
          {chapter ? 'Save Changes' : 'Submit Chapter'}
        </button>
        <div>
          {bonsaiChapter.photos.length > 0 && (
            <div>
              <h3>Photo Preview:</h3>
              {bonsaiChapter.photos.map(
                (photo, index) =>
                  photo && <Photo key={index} photo={photo} index={index} />
              )}
            </div>
          )}
        </div>
      </form>
    </DndProvider>
  );
};

export default BonsaiChapterForm;
