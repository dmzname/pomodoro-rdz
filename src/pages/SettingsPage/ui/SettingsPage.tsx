import { Link } from 'react-router-dom';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

const SettingsPage = () => {
    return (
        <div>
            SETTINGS
            <LangSwitcher />
            <ThemeSwitcher />
            <Link to='/'>MAIN</Link>
            <Link to='/statistics'>STAT</Link>
            <Link to='/settings'>SETTINGS</Link>
        </div>
    );
};

export default SettingsPage;
