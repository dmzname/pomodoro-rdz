import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { ReactNode } from 'react';

interface IDropdownProps {
    className?: string;
    children?: ReactNode;
    testId?: string;
}

export const Dropdown = ({ className, children, testId }: IDropdownProps) => {
    return (
        <div data-testid={testId} className={classNames(cls.root, {}, [className])}>
            {children}
        </div>
    );
};
