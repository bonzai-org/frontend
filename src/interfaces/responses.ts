import { BonsaiChapter } from "./bonsai";
import { UserPartial } from "./user";

// POST api/auth/login and api/auth/signup
export interface AuthPostResponse {
  username?: string;
  profilePhoto?: string;
  message?: string;
}

// GET api/bonsai/:id
export interface BonsaiGetResponse {
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
