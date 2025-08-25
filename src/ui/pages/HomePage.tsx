import { AppTemplate } from '../templates/AppTemplate';
import { StatusBar } from '../molecules/StatusBar/StatusBar';

export function HomePage() {
  return (
    <AppTemplate statusBar={<StatusBar />}>
      <h1 className='text-3xl font-bold text-center underline'>Kommita!</h1>
    </AppTemplate>
  );
}
