import { Variants, stagger } from 'motion/react';

const hidden = { scale: 0.8, opacity: 0, y: 30 };
const visible = { scale: 1, opacity: 1, y: 0 };

export const viewportContainerVariants: Variants = {
    hidden: hidden,
    visible: { ...visible, transition: { delayChildren: stagger(0.2) } },
};

export const viewportChildVariants: Variants = {
    hidden: hidden,
    visible: { ...visible, transition: { duration: 0.5 } },
};
