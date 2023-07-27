import { ReactNode } from 'react';

interface LayoutProps {
    sidebarSlot?: ReactNode;
    headerSlot?: ReactNode;
    footerSlot?: ReactNode;
    children?: ReactNode;
}

export const Layout = (props: LayoutProps) => {
    const { sidebarSlot, headerSlot, footerSlot, children } = props;
    return (
        <>
            {headerSlot && headerSlot}
            {sidebarSlot && sidebarSlot}
            <main className='main'>{children}</main>
            {footerSlot && footerSlot}
        </>
    );
};
