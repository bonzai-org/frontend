import { BonsaiChapterFile } from "../uploadBonsai";

// create bonsai request payload
export interface CreateBonsaiPayload {
    bonsaiChapters: BonsaiChapterFile[];
    geoLocation: string;
    hardinessZone: string;
    species: string;
    height?: string;
    width?: string;
    nebari?: string;
    style?: string;
  }

export interface LogInPayload{
    username: string;
    password: string;
}

export interface SignUpPayload {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}