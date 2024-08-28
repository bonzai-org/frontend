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
