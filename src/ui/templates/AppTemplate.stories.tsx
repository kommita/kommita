import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppTemplate } from './AppTemplate';
import { TitleBar } from '../molecules/TitleBar';

const meta = {
  component: AppTemplate,
  args: {
    titleBar: undefined,
    children: undefined,
  },
  argTypes: {
    children: { control: false }
  }
} as Meta<typeof AppTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppTemplate titleBar={<TitleBar title='Kommita' />}>
      <h1 className='text-center'>Hello world!</h1>
    </AppTemplate>
  )
};
