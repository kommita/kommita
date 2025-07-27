// To learn more about the differences between the "main" and the "renderer" context in Electron, visit:
// https://electronjs.org/docs/tutorial/process-model
import { createRoot } from 'react-dom/client';
import { App } from './Ui/App';

const appElement = document.getElementById('app');
if (!appElement) throw new Error('No app element found');

createRoot(appElement).render(<App/>);
