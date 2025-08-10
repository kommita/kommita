import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export function WindowContainer(props: Props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
