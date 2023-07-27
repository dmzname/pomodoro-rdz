import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'shared/ui/Button/Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'CLICK',
    },
};
