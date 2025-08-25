import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppTemplate } from './AppTemplate';
import { TitleBar } from '../molecules/TitleBar';
import { StatusBar } from '../molecules/StatusBar/StatusBar';

const meta = {
  component: AppTemplate,
  args: {
    titleBar: undefined,
    children: undefined,
    statusBar: undefined
  },
  argTypes: {
    children: { control: false }
  }
} as Meta<typeof AppTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppTemplate titleBar={<TitleBar title='Kommita' />} statusBar={<StatusBar />}>
      <h1 className='text-center'>Hello world!</h1>
    </AppTemplate>
  )
};
