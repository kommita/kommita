import { ReactNode } from 'react';
import { WindowContainer } from '../atoms/WindowContainer';
import { WindowContent } from '../atoms/WindowContent';
import { TitleBar } from '../molecules/TitleBar';
import { StatusBar } from '../molecules/StatusBar/StatusBar';


interface Props {
  children?: ReactNode;
}

export function AppTemplate(props: Props) {
  return (
    <WindowContainer>
      <TitleBar />
      <WindowContent>
        {props.children}
      </WindowContent>
      <StatusBar />
    </WindowContainer>
  );
}
