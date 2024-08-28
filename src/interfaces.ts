export interface BonsaiChapter {
  photoUrls: string[];
  date: Date;
  caption: string;
  bonsaiId: string;
}

export interface Bonsai {
  id: string;
  user: string;
  species: string;
  geoLocation: string;
  style: string;
  height: string;
  width: string;
  nebari: string;
  hardinessZone: string;
  bonsaiChapters: BonsaiChapter[];
}

// upload

export interface BonsaiChapterFile {
  photos: (File | null)[];
  caption: string;
  date: Date;
}

export interface BonsaiSubmitFormProps {
  bonsaiData: Bonsai;
  bonsaiChapterArr: BonsaiChapterFile[];
  onAddNewChapter: () => void;
  onEditData: () => void;
  onEditChapter: (index: number) => void;
  onDiscardBonsai: () => void;
  onSubmitBonsai: () => void;
  onDeleteChapter: (index: number) => void;
}