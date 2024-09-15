export interface BonsaiChapter {
  photoUrls: string[];
  date: Date;
  caption: string;
  bonsaiId: string;
}

export interface UserPartial {
  username: string;
  profilePhoto?: string;
}

export interface UserFull {
  id: string;
  profilePhoto: string;
  username: string;
  bio: string;
  email: string;
}

export interface UserIcon {
  profilePhoto: string | null;
  username: string | null;
}

export interface Bonsai {
  id: string;
  username: string;
  species: string;
  geoLocation: string;
  style?: string;
  height?: string;
  width?: string;
  nebari?: string;
  hardinessZone: string;
  bonsaiChapters: BonsaiChapter[];
}

// upload

export interface BonsaiChapterFile {
  photos: (File | null)[];
  caption: string;
  date: Date;
}

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

export interface TOCEntry {
  title: string;
  id: string;
}

export interface AuthContextProps {
  username: string | null;
  profilePhoto: string | null;
  setAuthData: (username: string, profilePhoto: string) => void;
}

// responses

// what client receives from backend on get bonsai
export interface BonsaiPageResponse {
  geoLocation: string;
  hardinessZone: string;
  species: string;
  height?: string;
  width?: string;
  nebari?: string;
  style?: string;
  bonsaiChapters: BonsaiChapter[];
  username: string;
  id: string;
}