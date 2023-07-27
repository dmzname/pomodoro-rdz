import { Link } from 'react-router-dom';

const StatisticsPage = () => {
    return (
        <div>
            STATISTICS
            <Link to='/'>MAIN</Link>
            <Link to='/statistics'>STAT</Link>
            <Link to='/settings'>SETTINGS</Link>
        </div>
    );
};

export default StatisticsPage;
