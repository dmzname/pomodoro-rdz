import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

import { Button } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls['theme-switcher'], {}, [className, cls[theme]])}
            onClick={toggleTheme}>
            <span>{theme === Theme.DARK ? 'DARK' : 'LIGHT'}</span>
        </Button>
    );
};
