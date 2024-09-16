export interface TOCEntry {
  title: string;
  id: string;
}

export interface AuthContextProps {
  username: string | null;
  profilePhoto: string | null;
  setAuthData: (username: string, profilePhoto: string) => void;
}