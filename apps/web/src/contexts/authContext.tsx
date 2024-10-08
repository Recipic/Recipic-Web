import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { useCookies } from 'react-cookie';

type TTokens = {
  accessToken: string;
};

type TAuthContext = {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: ({ accessToken }: TTokens) => void;
  logout: () => void;
  withdraw: () => void;
};

const defaultAuthContext: TAuthContext = {
  isLoggedIn: false,
  isLoading: true,
  login: () => {},
  logout: () => {},
  withdraw: () => {},
};

const AuthContext = createContext<TAuthContext>(defaultAuthContext);

type TAuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: TAuthProviderProps): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [, , removeCookie] = useCookies(['refreshToken']);

  const checkLoginStatus = useCallback((): void => {
    const accessToken = localStorage.getItem('accessToken');

    setIsLoggedIn(accessToken !== null);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [checkLoginStatus]);

  const login = useCallback(
    ({ accessToken }: TTokens): void => {
      localStorage.setItem('accessToken', accessToken);
      setIsLoggedIn(true);
      checkLoginStatus();
    },
    [checkLoginStatus],
  );

  const logout = useCallback((): void => {
    localStorage.removeItem('accessToken');
    removeCookie('refreshToken', { path: '/' });
    setIsLoggedIn(false);
    checkLoginStatus();
  }, [removeCookie, checkLoginStatus]);

  const withdraw = useCallback((): void => {
    localStorage.removeItem('accessToken');
    removeCookie('refreshToken', { path: '/' });
    setIsLoggedIn(false);
    checkLoginStatus();
  }, [removeCookie, checkLoginStatus]);

  const value = useMemo<TAuthContext>(
    () => ({
      isLoggedIn,
      isLoading,
      login,
      logout,
      withdraw,
    }),
    [isLoggedIn, isLoading, login, logout, withdraw],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): TAuthContext {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth는 AuthProvider 안에서 사용되어야 합니다!!');
  }
  return context;
}
