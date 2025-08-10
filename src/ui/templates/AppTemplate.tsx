import { ReactElement, ReactNode } from 'react';
import { WindowContainer } from '../atoms/WindowContainer';
import { TitleBar } from '../atoms/TitleBar';
import { WindowContent } from '../atoms/WindowContent';

interface Props {
  children?: ReactNode;
  title?: string;
  titleBar?: ReactElement<typeof TitleBar>;
}

export function AppTemplate(props: Props) {
  if (props.title && props.titleBar) {
    throw new Error('You cannot use both title and titleBar props together.');
  }

  return (
    <WindowContainer>
      {props.title && <TitleBar title={props.title} />}
      {props.titleBar && props.titleBar}
      <WindowContent>{props.children}</WindowContent>
    </WindowContainer>
  );
}
