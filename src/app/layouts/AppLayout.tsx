import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { Layout } from 'shared/ui/Layout/Layout';
import { Header } from 'widgets/Header';

export const AppLayout = () => {
    return (
        <Layout headerSlot={<Header />}>
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </Layout>
    );
};
