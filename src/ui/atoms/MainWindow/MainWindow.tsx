import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function MainWindow(props: Props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
