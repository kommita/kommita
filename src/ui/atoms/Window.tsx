import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function Window(props: Props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
