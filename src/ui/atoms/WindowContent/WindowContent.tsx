import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function WindowContent(props: Props) {
  return (
    <main className='flex-1 overflow-auto'>
      {props.children}
    </main>
  );
}
