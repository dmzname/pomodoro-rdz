import { screen } from '@testing-library/react';
import { Header } from 'widgets/Header';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Header', () => {
    test('Test render', () => {
        componentRender(<Header />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
});
