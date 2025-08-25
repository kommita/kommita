import { ReactElement, ReactNode } from 'react';
import { WindowContainer } from '../atoms/WindowContainer';
import { WindowContent } from '../atoms/WindowContent';
import { TitleBar } from '../molecules/TitleBar';
import { StatusBar } from '../molecules/StatusBar/StatusBar';


interface Props {
  children?: ReactNode;
  titleBar?: ReactElement<typeof TitleBar>;
  statusBar?: ReactElement<typeof StatusBar>;
}

export function AppTemplate(props: Props) {
  return (
    <WindowContainer>
      {!props.titleBar && <TitleBar />}
      {props.titleBar}
      <WindowContent>{props.children}</WindowContent>
      {props.statusBar}
    </WindowContainer>
  );
}
