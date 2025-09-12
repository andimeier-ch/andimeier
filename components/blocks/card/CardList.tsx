'use client';

import { motion } from 'motion/react';
import { viewportChildVariants, viewportContainerVariants } from '@/lib/motion';
import Card from './Card';
import { AboutTopic } from '@/data/de';
import './card-list.scss';

export default function CardList({ items }: { items: AboutTopic[] }) {
    return (
        <motion.div
            className="card-list"
            variants={viewportContainerVariants}
            initial="hidden"
            whileInView="visible"
        >
            {items.map((topic) => (
                <motion.div
                    key={topic.title}
                    className="card-list__item"
                    variants={viewportChildVariants}
                    viewport={{ amount: 'all' }}
                >
                    <Card {...topic} />
                </motion.div>
            ))}
        </motion.div>
    );
}
