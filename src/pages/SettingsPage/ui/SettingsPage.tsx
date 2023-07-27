import { Link } from 'react-router-dom';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

const SettingsPage = () => {
    return (
        <div>
            SETTINGS
            <LangSwitcher />
            <Link to='/'>MAIN</Link>
            <Link to='/statistics'>STAT</Link>
            <Link to='/settings'>SETTINGS</Link>
        </div>
    );
};

export default SettingsPage;
