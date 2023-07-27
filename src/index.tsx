import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import './app/styles/main.scss';
import 'shared/config/i18n/i18n';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider initialTheme={Theme.DARK}>
        <App />
    </ThemeProvider>,
);
