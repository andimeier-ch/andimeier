'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useAccordionContext } from './Accordion';

type AccordionItemSlot = {
    className: string;
    markup: ReactNode;
};

export default function AccordionItem({
    id,
    trigger,
    content,
    icon,
    className,
}: {
    id: string;
    trigger: AccordionItemSlot;
    content: AccordionItemSlot;
    icon: AccordionItemSlot;
    className: string;
}) {
    const { openItemID, toggleItem } = useAccordionContext();

    const isOpen = openItemID === id;

    const iconVariants: Variants = {
        closed: { rotate: 0 },
        open: { rotate: -180 },
        hoverClosed: { rotate: -20 },
        hoverOpen: { rotate: -160 },
    };

    return (
        <motion.article
            className={className}
            animate={isOpen ? { x: 6 } : undefined}
            whileHover={isOpen ? undefined : { x: 6 }}
        >
            <motion.button
                className={`${trigger.className} button-reset`}
                onClick={() => toggleItem(id)}
                animate={isOpen ? 'open' : 'closed'}
                whileHover={isOpen ? 'hoverOpen' : 'hoverClosed'}
            >
                {trigger.markup}

                <motion.span className={icon.className} variants={iconVariants}>
                    {icon.markup}
                </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        className={content.className}
                        variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                    >
                        {content.markup}
                    </motion.section>
                )}
            </AnimatePresence>
        </motion.article>
    );
}
