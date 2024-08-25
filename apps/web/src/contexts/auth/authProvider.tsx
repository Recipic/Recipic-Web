import React, { createContext, useState, useContext } from 'react';
import { useCookies } from 'react-cookie';

type TAccessTokenType = string | null;

type TAuthContextType = {
  accessToken: TAccessTokenType;
  setAccessToken: (token: TAccessTokenType) => void;
  isLoggedIn: boolean;
};

const AuthContext = createContext<TAuthContextType | undefined>(undefined);

type TAuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: TAuthProviderProps) {
  const [accessToken, setAccessToken] = useState<TAccessTokenType>(null);
  const [cookies] = useCookies(['refreshToken']);

  const isLoggedIn = cookies.refreshToken !== undefined; // refreshToken이 있을 경우 로그인 상태가 맞다.

  return <AuthContext.Provider value={{ accessToken, setAccessToken, isLoggedIn }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 안에서 사용되어야 합니다!');
  }
  return context;
};
