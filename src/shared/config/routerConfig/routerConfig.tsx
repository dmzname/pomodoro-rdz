import { RouteObject } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import { StatisticsPage } from 'pages/StatisticsPage';
import { SettingsPage } from 'pages/SettingsPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    STATISTICS = 'statistics',
    SETTINGS = 'settings',
    NOTFOUND = 'notFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.STATISTICS]: '/statistics',
    [AppRoutes.SETTINGS]: '/settings',
    [AppRoutes.NOTFOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteObject> = {
    [AppRoutes.MAIN]: {
        index: true,
        element: <MainPage />,
    },
    [AppRoutes.STATISTICS]: {
        path: RoutePath.statistics,
        element: <StatisticsPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePath.settings,
        element: <SettingsPage />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
};
