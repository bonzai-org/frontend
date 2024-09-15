

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
