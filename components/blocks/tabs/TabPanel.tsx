'use client';

import { ReactNode } from 'react';
import { useTabsContext } from './Tabs';
import { printClasses } from '@/lib/helpers';

export default function TabPanel({
    id,
    classNames = [],
    children,
}: {
    id: string;
    classNames?: string[];
    children: ReactNode;
}) {
    const { activeTabId } = useTabsContext();
    const isVisible = activeTabId === id;

    if (!isVisible) return null;

    const cssClasses = ['tab-panel', ...classNames];

    return (
        <div className={printClasses(cssClasses)} tabIndex={0}>
            {children}
        </div>
    );
}
