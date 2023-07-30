import { fireEvent, render, screen } from '@testing-library/react';
import { Burger } from 'shared/ui/Burger/Burger';

describe('Burger', () => {
    it('Testing render', () => {
        render(<Burger />);
        expect(screen.getByTestId('burger')).toBeInTheDocument();
    });

    it('Testing open/close Burger', () => {
        render(<Burger />);
        const burger = screen.getByTestId('burger');
        expect(burger).toBeInTheDocument();
        fireEvent.click(burger);
        expect(burger).toHaveClass('is-opened');
        fireEvent.click(burger);
        expect(burger).not.toHaveClass('is-opened');
    });
});
