import React from 'react';
import { GearIcon } from '@radix-ui/react-icons';
import { Button } from '@recipic-packages/ui';
import { Link } from 'react-router-dom';

export default function SettingsButton() {
  return (
    <Link to="/settings" className="inline-block">
      <Button variant="ghost" size="icon" className="text-black" aria-label="설정">
        <GearIcon className="h-7 w-7" />
      </Button>
    </Link>
  );
}
