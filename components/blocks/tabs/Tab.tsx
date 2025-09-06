'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
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

    const props: {
        'aria-selected': boolean;
        'aria-controls': string;
        tabIndex?: number;
    } = {
        'aria-selected': false,
        'aria-controls': id,
    };

    if (isActive) {
        cssClasses.push('tab--is-active');
        props['aria-selected'] = true;
    }

    if (!isActive) {
        props.tabIndex = -1;
    }

    return (
        <button
            className={printClasses(cssClasses)}
            onClick={handleTabClick}
            {...props}
        >
            {children}

            {isActive && (
                <motion.div
                    className="tab__background"
                    layoutId="tab-indicator"
                />
            )}
        </button>
    );
}
