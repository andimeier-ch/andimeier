'use client';

import { createContext, ReactNode, use, useEffect, useState } from 'react';

type TabsContextObject = {
    activeTabId: string;
    handleTabChange: (id: string) => void;
};

const TabsContext = createContext<TabsContextObject>({
    activeTabId: '',
    handleTabChange: () => {},
});

export function useTabsContext() {
    const context = use(TabsContext);

    if (!context) {
        throw new Error('Tabs-realted components must be wrapped with <Tabs>');
    }

    return context;
}

export default function Tabs({
    defaultTabId,
    children,
}: {
    defaultTabId: string;
    children: ReactNode;
}) {
    const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);

    function handleTabChange(id: string) {
        setActiveTabId(id);
    }

    const contextValue: TabsContextObject = {
        activeTabId,
        handleTabChange,
    };

    return (
        <TabsContext value={contextValue}>
            <div className="tabs">{children}</div>
        </TabsContext>
    );
}
