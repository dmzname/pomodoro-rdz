import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

const SettingsPage = () => {
    return (
        <div>
            SETTINGS
            <LangSwitcher />
            <ThemeSwitcher />
        </div>
    );
};

export default SettingsPage;
