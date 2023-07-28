import type { Preview } from '@storybook/react';
import 'app/styles/main.scss';
import { withRouter } from 'storybook-addon-react-router-v6';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [withRouter],
};

export default preview;
