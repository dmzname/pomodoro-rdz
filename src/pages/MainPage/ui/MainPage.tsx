import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Главная страница')}

            <AppLink to='/'>MAIN</AppLink>
            <AppLink to='/statistics'>STAT</AppLink>
            <AppLink theme={AppLinkTheme.RED} to='/settings'>
                SETTINGS
            </AppLink>
        </div>
    );
};

export default MainPage;
