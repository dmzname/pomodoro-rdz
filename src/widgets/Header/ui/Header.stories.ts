import type { Meta, StoryObj } from '@storybook/react';
import { Header } from 'widgets/Header';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Header',
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
export const DarkTheme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
