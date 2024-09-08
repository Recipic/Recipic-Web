import React from 'react';
import { GearIcon } from '@radix-ui/react-icons';
import { Button } from '@recipic-packages/ui';
import { useNavigate } from 'react-router-dom';

export default function SettingsButton() {
  const navigate = useNavigate();

  return (
    <Button variant="ghost" size="icon" onClick={() => navigate('/settings')} className="text-black" aria-label="설정">
      <GearIcon className="h-7 w-7" />
    </Button>
  );
}
