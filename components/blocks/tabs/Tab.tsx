'use client';

import { ReactNode } from 'react';
import { useTabsContext } from './Tabs';
import './tab.scss';
import { printClasses } from '@/lib/helpers';

export default function Tab({
    id,
    classNames = [],
    children,
}: {
    id: string;
    classNames?: string[];
    children: ReactNode;
}) {
    const { activeTabId, handleTabChange } = useTabsContext();

    function handleTabClick() {
        handleTabChange(id);
    }

    const isActive = activeTabId === id;

    const cssClasses = ['tab', ...classNames];
    if (isActive) cssClasses.push('tab--is-active');

    return (
        <button className={printClasses(cssClasses)} onClick={handleTabClick}>
            {children}
        </button>
    );
}
