import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppTemplate } from './AppTemplate';
import { TitleBar } from '../atoms/TitleBar';

const meta = {
  component: AppTemplate,
} as Meta<typeof AppTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>Hello, world!</p>,
  }
};

export const WithTitleBar: Story = {
  args: {
    titleBar: <TitleBar title='Custom title bar' />,
    children: <p>Hello, world!</p>,
  }
};
