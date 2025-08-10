import type { Meta, StoryObj } from '@storybook/react-vite';
import { TitleBar } from './TitleBar';

const meta = {
  component: TitleBar,
} as Meta<typeof TitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithTitle: Story = {
  args: {
    title: 'Kommita!',
  },
};

export const WithChildren: Story = {
  args: {
    children: <p>
      <button className='border border-warning bg-warning text-dark p-3 rounded' onClick={() => alert('Clicked!')}>Click Me!</button>
    </p>,
  },
};
