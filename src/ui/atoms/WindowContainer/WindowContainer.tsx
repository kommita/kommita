import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function WindowContainer(props: Props) {
  return (
    <div className='h-screen flex flex-col bg-[#2e3440] text-white font-inter'>
      {props.children}
    </div>
  );
}
