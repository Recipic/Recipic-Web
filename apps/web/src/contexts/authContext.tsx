import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

type TTokens = {
  accessToken: string;
};

type TAuthContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: ({ accessToken }: TTokens) => void;
  logout: () => void;
  signout: () => void;
};

const defaultAuthContext: TAuthContext = {
  isLoggedIn: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
  signout: () => {},
};

const AuthContext = createContext<TAuthContext>(defaultAuthContext);

type TAuthProviderProps = {
  children: React.ReactNode;
};

const isDevelopment = process.env.NODE_ENV === 'development';

export function AuthProvider({ children }: TAuthProviderProps): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cookies, removeCookie] = useCookies(['refreshToken']);

  useEffect(() => {
    const checkLoginStatus = (): void => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = cookies.refreshToken;

      if (isDevelopment) {
        setIsLoggedIn(Boolean(accessToken));
      } else {
        setIsLoggedIn(Boolean(accessToken && refreshToken));
      }
      setIsLoading(false);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [cookies.refreshToken]);

  const login = ({ accessToken }: TTokens): void => {
    localStorage.setItem('accessToken', accessToken);
    setIsLoggedIn(true);
  };

  const logout = (): void => {
    localStorage.removeItem('accessToken');
    removeCookie('refreshToken', { path: '/' });
    setIsLoggedIn(false);
  };

  const signout = (): void => {
    localStorage.removeItem('accessToken');
    removeCookie('refreshToken', { path: '/' });
    setIsLoggedIn(false);
  };

  const value: TAuthContext = {
    isLoggedIn,
    isLoading,
    login,
    logout,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): TAuthContext {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 안에서 사용되어야 합니다!!');
  }
  return context;
}
