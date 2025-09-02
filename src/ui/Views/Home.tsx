import React from 'react';
import { version } from '../../../package.json';

export function Home() {
  return (
    <div className='h-screen flex flex-col bg-dark text-primary font-inter text-sm'>
      
      <header className='drag flex items-center h-8 px-4 select-none bg-surface text-secondary text-xs' />

      <main className='flex-1 overflow-auto'>
        <h1 className='text-3xl font-bold text-center underline'>Kommita!</h1>
      </main>

      <div className='flex items-center h-8 px-4 bg-surface text-secondary text-xs absolute bottom-0 w-full'>
        <span className='ml-auto'>{version}</span>
      </div>
    </div>
  );
}
