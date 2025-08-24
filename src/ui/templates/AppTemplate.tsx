import { ReactElement, ReactNode } from 'react';
import { WindowContainer } from '../atoms/WindowContainer';
import { WindowContent } from '../atoms/WindowContent';
import { TitleBar } from '../molecules/TitleBar';

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
