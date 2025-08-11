import { ReactElement, ReactNode } from 'react';
import { WindowContainer } from '../atoms/WindowContainer';
import { TitleBar } from '../atoms/TitleBar';
import { WindowContent } from '../atoms/WindowContent';

interface Props {
  children?: ReactNode;
  titleBar?: ReactElement<typeof TitleBar>;
}

export function AppTemplate(props: Props) {
  return (
    <WindowContainer>
      {!props.titleBar && <TitleBar />}
      {props.titleBar}
      <WindowContent>{props.children}</WindowContent>
    </WindowContainer>
  );
}
