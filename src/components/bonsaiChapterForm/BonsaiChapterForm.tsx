import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './BonsaiChapterForm.module.css';

interface BonsaiChapterFile {
  photos: (File | null)[];
  caption: string;
  date: Date;
}

function BonsaiChapterForm({
  onSubmit,
  chapter
}: {
  onSubmit: (chapter: BonsaiChapterFile) => void;
  chapter?: BonsaiChapterFile;
}) {
  const [bonsaiChapter, setBonsaiChapter] = useState<BonsaiChapterFile>(
    chapter || { photos: [], caption: '', date: new Date() }
  );

  useEffect(() => {
    if (chapter) {
      setBonsaiChapter(chapter);
    }
  }, [chapter]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        setBonsaiChapter((prevChapter) => ({
          ...prevChapter,
          photos: [...prevChapter.photos, file]
        }));
      }
    }
  };

  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBonsaiChapter((prevChapter) => ({
      ...prevChapter,
      caption: event.target.value
    }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBonsaiChapter((prevChapter) => ({
      ...prevChapter,
      date: new Date(event.target.value)
    }));
  };

  const handleRemovePhoto = (index: number) => {
    setBonsaiChapter((prevChapter) => {
      const newPhotos = prevChapter.photos.filter((_, i) => i !== index);
      return { ...prevChapter, photos: newPhotos };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(bonsaiChapter);
    // Reset the form
    setBonsaiChapter({ photos: [], caption: '', date: new Date() });
  };

  const movePhoto = (dragIndex: number, hoverIndex: number) => {
    setBonsaiChapter((prevChapter) => {
      const draggedPhoto = prevChapter.photos[dragIndex];
      const newPhotos = [...prevChapter.photos];
      newPhotos.splice(dragIndex, 1);
      newPhotos.splice(hoverIndex, 0, draggedPhoto);
      return { ...prevChapter, photos: newPhotos };
    });
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
      <div ref={(node) => ref(drop(node))} className={styles.photoContainer}>
        <img
          src={URL.createObjectURL(photo!)}
          alt={`Preview ${index}`}
          className={styles.photo}
        />
        <button
          type="button"
          onClick={() => handleRemovePhoto(index)}
          className={styles.removeBtn}
        >
          X
        </button>
      </div>
    );
  };

  const memoizedPhotos = useMemo(
    () =>
      bonsaiChapter.photos.map(
        (photo, index) =>
          photo && <Photo key={index} photo={photo} index={index} />
      ),
    [bonsaiChapter.photos]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <form onSubmit={handleSubmit}>
        <h2>{chapter ? 'Edit Bonsai Chapter' : 'Add Bonsai Chapter'}</h2>
        <div className={styles.photoUploader}>
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
        <button type="submit" className={styles.btn}>
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
}

export default BonsaiChapterForm;
