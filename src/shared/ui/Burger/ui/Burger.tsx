import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Burger.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useState } from 'react';

interface IBurgerProps {
    className?: string;
}

export const Burger = ({ className }: IBurgerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.root, { [cls['is-opened']]: isOpen }, [className])}
            onClick={() => setIsOpen((prev) => !prev)}>
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
