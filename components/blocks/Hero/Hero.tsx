'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Section from '@/components/elements/section/Section';
import './hero.scss';

export default function Hero({ children }: { children: ReactNode }) {
    const hero = useRef(null);

    const { scrollYProgress } = useScroll({
        target: hero,
        offset: ['center center', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 500]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <Section size="wide" classNames={['hero']}>
            <motion.div
                className="hero__title-wrapper"
                ref={hero}
                style={{ scale, y, opacity }}
            >
                <p className="hero__title">{children}</p>
            </motion.div>
        </Section>
    );
}
