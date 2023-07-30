import cls from './MenuNavigation.module.scss';
import './MenuNavigation.scss';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'react-router-dom';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import { useTranslation } from 'react-i18next';
import HomeIcon from 'shared/assets/images/home.svg';
import StatIcon from 'shared/assets/images/chart-column-solid.svg';
import SettingsIcon from 'shared/assets/images/settings-svgrepo-com.svg';
import LoginIcon from 'shared/assets/images/arrow-right-to-bracket-solid.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const MenuNavigation = ({ isOpen }: { isOpen?: boolean }) => {
    const { t } = useTranslation();
    return (
        <Dropdown
            testId={'menu-navigation'}
            className={classNames(cls['menu-dropdown'], { ['is-opened']: isOpen }, [
                'menu-navigation',
            ])}>
            <nav className={classNames(cls.navigation, {}, ['main-menu'])}>
                <NavLink className={cls.link} to={RoutePath.main}>
                    <HomeIcon />
                    {t('Главная страница')}
                </NavLink>
                <NavLink className={cls.link} to={RoutePath.statistics}>
                    <StatIcon />
                    {t('Статистика')}
                </NavLink>
                <NavLink className={cls.link} to={RoutePath.settings}>
                    <SettingsIcon />
                    {t('Настройки')}
                </NavLink>
                <Button theme={ButtonTheme.CLEAR} className={cls.link}>
                    <LoginIcon />
                    {t('Войти')}
                </Button>
            </nav>
        </Dropdown>
    );
};
