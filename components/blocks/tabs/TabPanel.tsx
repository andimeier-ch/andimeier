'use client';

import { ReactNode } from 'react';
import { useTabsContext } from './Tabs';

export default function TabPanel({
    id,
    children,
}: {
    id: string;
    children: ReactNode;
}) {
    const { activeTabId } = useTabsContext();
    const isVisible = activeTabId === id;

    if (!isVisible) return null;

    return <div className="tab-panel">{children}</div>;
}
