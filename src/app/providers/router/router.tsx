import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { AppLayout } from 'app/layouts/AppLayout';
import { PageError } from 'widgets/PageError/ui/PageError';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <PageError />,
        children: Object.values(routeConfig).map((route: RouteObject) => route),
    },
]);
