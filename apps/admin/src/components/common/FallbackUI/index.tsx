import React from 'react';
import PrimarySpinner from '@/components/common/PrimarySpinner';

export default function FallbackUI() {
  return (
    <div className="min-h-screen flex-col flex-grow flex items-center justify-center">
      <PrimarySpinner />
    </div>
  );
}
