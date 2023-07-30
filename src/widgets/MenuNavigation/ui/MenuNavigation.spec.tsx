import { screen } from '@testing-library/react';
import { MenuNavigation } from 'widgets/MenuNavigation';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Menu Navigation', () => {
    it('Testing render', () => {
        componentRender(<MenuNavigation />);
        expect(screen.getByTestId('menu-navigation')).toBeInTheDocument();
    });

    it('Testing is opened Menu Navigation', () => {
        componentRender(<MenuNavigation isOpen={true} />);

        const menuNav = screen.getByTestId('menu-navigation');

        expect(menuNav).toBeInTheDocument();
        expect(menuNav).toHaveClass('is-opened');
    });

    it('Testing is closed Menu Navigation', () => {
        componentRender(<MenuNavigation isOpen={false} />);

        const menuNav = screen.getByTestId('menu-navigation');

        expect(menuNav).toBeInTheDocument();
        expect(menuNav).not.toHaveClass('is-opened');
    });
});
