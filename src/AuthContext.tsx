import { createContext, useState, ReactNode } from 'react';
import { AuthContextProps } from './interfaces/misc';

const AuthContext = createContext<AuthContextProps>({
  username: null,
  profilePhoto: null,
  setAuthData: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  const setAuthData = (username: string, profilePhoto: string) => {
    setUsername(username);
    setProfilePhoto(profilePhoto);
  };

  return (
    <AuthContext.Provider value={{ username, profilePhoto, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
