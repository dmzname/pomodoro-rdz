import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { MenuNavigation } from 'widgets/MenuNavigation';

const meta = {
    title: 'shared/MenuNavigation',
    component: MenuNavigation,
    decorators: [
        (Story) => (
            <div style={{ position: 'fixed', right: 0, top: 0 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof MenuNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        isOpen: true,
    },
};
export const DarkTheme: Story = {
    args: {
        isOpen: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
