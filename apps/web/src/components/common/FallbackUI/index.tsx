import React from 'react';
import PrimarySpinner from '@/components/common/PrimarySpinner';

export default function FallbackUI() {
  return (
    <div className="min-h-screen flex-col flex-grow flex items-center justify-center">
      <PrimarySpinner />
    </div>
  );
}

export function TranslucentFallbackUI() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <PrimarySpinner />
    </div>
  );
}
