import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title?: string;
}

export function TitleBar(props: Props) {
  if (props.title && props.children) {
    throw new Error('TitleBar component should not have both children and title props.');
  }

  const commonStyles = 'drag flex items-center h-8 px-4 select-none bg-surface text-secondary text-xs';
  const className = props.title ? `${commonStyles} justify-center` : `${commonStyles} justify-between`;

  return (
    <header className={className}>
      {props.title && <span>{props.title}</span>}
      {props.children}
    </header>
  );
}
