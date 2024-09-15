import { BonsaiChapter } from "./bonsai";

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