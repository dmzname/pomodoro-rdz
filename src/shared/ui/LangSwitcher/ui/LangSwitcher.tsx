import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();

    const handleLang = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    return (
        <div className={classNames(cls.root, {}, [className])}>
            <Button
                className={classNames(cls.btn, { [cls.active]: i18n.language === 'ua' })}
                onClick={() => handleLang('ua')}>
                UA
            </Button>
            <Button
                className={classNames(cls.btn, { [cls.active]: i18n.language === 'ru' })}
                onClick={() => handleLang('ru')}>
                RU
            </Button>
            <Button
                className={classNames(cls.btn, { [cls.active]: i18n.language === 'en' })}
                onClick={() => handleLang('en')}>
                EN
            </Button>
        </div>
    );
};
