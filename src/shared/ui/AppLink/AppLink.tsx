import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    children?: ReactNode;
    className?: string;
    theme?: AppLinkTheme;
    to: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

    return (
        <Link to={to} className={classNames(cls.root, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};
