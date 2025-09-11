import { Variants, stagger } from 'motion/react';

export const viewportContainerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delayChildren: stagger(0.3) },
    },
};

export const viewportChildVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
