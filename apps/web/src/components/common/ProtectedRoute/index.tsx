import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';
import PrimarySpinner from '@/components/common/PrimarySpinner';

type TProtectedRouteProps = {
  children: React.ReactNode;
  redirectPath?: string;
};

export function ProtectedRoute({ children, redirectPath = '/login' }: TProtectedRouteProps) {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <PrimarySpinner />;
  }

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}
