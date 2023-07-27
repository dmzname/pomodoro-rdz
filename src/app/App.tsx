import ReactIcon from '../shared/assets/images/React-icon.svg';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

export const App = () => {
    const { t } = useTranslation();
    return (
        <>
            <ReactIcon />
            <p>{t('REACT APP!')}</p>
            <p>{t('Тестовый перевод')}</p>
            <LangSwitcher />
        </>
    );
};
