import React from 'react';
import { version } from '../../../../package.json';

export function StatusBar() {
  return (
    <div className='flex items-center h-8 px-4  bg-surface text-secondary text-xs absolute bottom-0 w-full'>
      <span className='ml-auto'>{version}</span>
    </div>
  );
}
