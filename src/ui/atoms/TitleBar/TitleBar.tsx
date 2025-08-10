import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title?: string;
}

export function TitleBar(props: Props) {
  return (
    <header>
      {props.title && <span>{props.title}</span>}
      {props.children}
    </header>
  );
}
