import { UserPartial } from './user';

export interface Bonsai {
  geoLocation: string;
  hardinessZone: string;
  species: string;
  height?: string;
  width?: string;
  nebari?: string;
  style?: string;
  bonsaiChapters: BonsaiChapter[];
  user: UserPartial;
  id: string;
}

export interface BonsaiChapter {
  photoUrls: string[];
  date: Date;
  caption: string;
  bonsaiId: string;
}