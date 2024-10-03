export interface BonsaiData {
    geoLocation: string;
    hardinessZone: string;
    species: string;
    height?: string;
    width?: string;
    nebari?: string;
    style?: string;
  }
  
  
  export interface BonsaiSubmitFormProps {
    bonsaiData: BonsaiData;
    bonsaiChapterArr: BonsaiChapterFile[];
    onAddNewChapter: () => void;
    onEditData: () => void;
    onEditChapter: (index: number) => void;
    onDiscardBonsai: () => void;
    onSubmitBonsai: () => void;
    onDeleteChapter: (index: number) => void;
  }

  export interface BonsaiChapterFile {
    photos: (File | null)[];
    caption: string;
    date: Date;
  }