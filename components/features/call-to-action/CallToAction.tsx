'use client';

import { motion } from 'motion/react';
import Button from '@/components/blocks/button/Button';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import { viewportContainerVariants, viewportChildVariants } from '@/lib/motion';

export default function CallToAction() {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={viewportContainerVariants}
        >
            <motion.div
                variants={viewportChildVariants}
                viewport={{ amount: 'all' }}
            >
                <Paragraph size="large" center>
                    Du willst mit mir arbeiten?
                </Paragraph>
            </motion.div>

            <motion.div
                variants={viewportChildVariants}
                viewport={{ amount: 'all' }}
            >
                <Paragraph center>
                    <Button email="hallo@andimeier.ch">Schreib mir!</Button>
                </Paragraph>
            </motion.div>
        </motion.div>
    );
}
