import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers/router/router';

export const App = () => {
    return (
        <Suspense fallback=''>
            <RouterProvider router={router} />
        </Suspense>
    );
};
