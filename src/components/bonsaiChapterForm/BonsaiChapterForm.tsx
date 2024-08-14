import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

  const handlePhotoChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        if (file) {
          setBonsaiChapter((prevChapter) => ({
            ...prevChapter,
            photos: [...prevChapter.photos, file]
          }));
        }
      }
    },
    []
  );

  const handleCaptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBonsaiChapter((prevChapter) => ({
        ...prevChapter,
        caption: event.target.value
      }));
    },
    []
  );

  const handleDateChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBonsaiChapter((prevChapter) => ({
        ...prevChapter,
        date: new Date(event.target.value)
      }));
    },
    []
  );

  const handleRemovePhoto = useCallback((index: number) => {
    setBonsaiChapter((prevChapter) => {
      const newPhotos = prevChapter.photos.filter((_, i) => i !== index);
      return { ...prevChapter, photos: newPhotos };
    });
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onSubmit(bonsaiChapter);
      // Reset the form
      setBonsaiChapter({ photos: [], caption: '', date: new Date() });
    },
    [bonsaiChapter, onSubmit]
  );

  const movePhoto = useCallback((dragIndex: number, hoverIndex: number) => {
    setBonsaiChapter((prevChapter) => {
      const draggedPhoto = prevChapter.photos[dragIndex];
      const newPhotos = [...prevChapter.photos];
      newPhotos.splice(dragIndex, 1);
      newPhotos.splice(hoverIndex, 0, draggedPhoto);
      return { ...prevChapter, photos: newPhotos };
    });
  }, []);

  const Photo = useCallback(
    ({ photo, index }: { photo: File | null; index: number }) => {
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
          style={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
          }}
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
    },
    [movePhoto, handleRemovePhoto]
  );

  const memoizedPhotos = useMemo(
    () =>
      bonsaiChapter.photos.map(
        (photo, index) =>
          photo && <Photo key={index} photo={photo} index={index} />
      ),
    [bonsaiChapter.photos, Photo]
  );

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
              {memoizedPhotos}
            </div>
          )}
        </div>
      </form>
    </DndProvider>
  );
};

export default BonsaiChapterForm;
