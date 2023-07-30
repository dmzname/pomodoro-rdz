import { classNames } from 'shared/lib/classNames/classNames';
import './Burger.scss';
import cls from './Burger.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';

interface IBurgerProps {
    className?: string;
    onOpened?: () => void;
}

export const Burger = ({ className, onOpened }: IBurgerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpened = () => {
        setIsOpen((prev) => !prev);
        onOpened && onOpened();
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            data-testid='burger'
            className={classNames(cls.root, { ['is-opened']: isOpen }, [className, 'burger'])}
            onClick={handleOpened}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Button>
    );
};
