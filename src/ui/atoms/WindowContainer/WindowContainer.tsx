import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function WindowContainer(props: Props) {
  return (
    <div className='h-screen flex flex-col bg-dark text-primary font-inter text-sm'>
      {props.children}
    </div>
  );
}
