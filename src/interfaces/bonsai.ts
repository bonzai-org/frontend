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

  export interface BonsaiChapter {
    photoUrls: string[];
    date: Date;
    caption: string;
    bonsaiId: string;
  }