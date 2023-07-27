import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../context/ThemeContext';
import { FC, ReactNode, useEffect, useState } from 'react';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface IThemeProvider {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    useEffect(() => {
        document.body.classList.add(theme);
        return () => {
            document.body.removeAttribute('class');
        };
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setTheme: setTheme,
            }}>
            {children}
        </ThemeContext.Provider>
    );
};
