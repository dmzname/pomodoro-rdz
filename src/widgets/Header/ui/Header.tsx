import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import LogoIcon from 'shared/assets/images/logo.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Burger } from 'shared/ui/Burger/Burger';
import { MenuNavigation } from 'widgets/MenuNavigation';
import { useState } from 'react';

interface IHeaderProps {
    className?: string;
}

export const Header = ({ className }: IHeaderProps) => {
    const { t } = useTranslation();
    const [isOpenBurger, setIsOpenBurger] = useState(false);

    return (
        <header data-testid='header' className={classNames(cls.root, {}, [className])}>
            <AppLink to='/' className={cls.logo} theme={AppLinkTheme.RED}>
                <LogoIcon />
                {t('pomodoro_rdz')}
            </AppLink>
            <Burger onOpened={() => setIsOpenBurger(!isOpenBurger)} />
            <MenuNavigation isOpen={isOpenBurger} />
        </header>
    );
};
