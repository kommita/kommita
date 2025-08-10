import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function TitleBar(props: Props) {
  return (
    <header>
      {props.children}
    </header>
  );
}
