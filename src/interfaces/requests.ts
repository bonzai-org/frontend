import { BonsaiChapterFile } from "./uploadBonsai";

// POST api/auth/login
export interface LogInPayload {
    username: string;
    password: string;
}

// POST api/auth/signup
export interface SignUpPayload {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

// POST api/bonsai
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
export interface NewBonsaiRequest {
    hardinessZone: string,
    height?: number,
    width?: number,
    nebari?: number,
    style?: string,
    species: string,
    geoLocation: string,
    chapters: BonsaiChapterMetadata[]
}

export interface BonsaiChapterMetadata {
    date: Date,
    caption: string,
    photos: BonsaiChapterPhoto[]
}

export interface BonsaiChapterPhoto {
    fileType: 'image/jpeg',
    photoOrder: number,
}