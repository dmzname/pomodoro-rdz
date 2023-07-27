import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { Layout } from 'shared/ui/Layout/Layout';

export const AppLayout = () => {
    return (
        <Layout>
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </Layout>
    );
};
