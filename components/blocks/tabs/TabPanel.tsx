'use client';

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useTabsContext } from './Tabs';
import { printClasses } from '@/lib/helpers';
import './tab-panel.scss';

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

    const cssClasses = ['tab-panel', ...classNames];
    const props: { 'aria-labelledby': string; tabIndex?: number } = {
        'aria-labelledby': id,
    };

    if (isVisible) {
        props.tabIndex = 0;
        cssClasses.push('tab-panel--is-visible');
    }

    return (
        <div className={printClasses(cssClasses)} {...props}>
            <motion.div
                initial={false}
                animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
        </div>
    );
}
