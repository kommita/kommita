import type { StoryObj } from '@storybook/react-vite';
import { App } from '../src/ui/App';

const meta = {
    component: App,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};
