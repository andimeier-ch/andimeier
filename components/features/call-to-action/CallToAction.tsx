'use client';

import { motion } from 'motion/react';
import Button from '@/components/blocks/button/Button';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import { viewportContainerVariants, viewportChildVariants } from '@/lib/motion';
import Modal from '@/components/blocks/modal/Modal';
import { useState } from 'react';

export default function CallToAction() {
    const [contactFormIsVisible, setContactFormIsVisible] =
        useState<boolean>(false);

    return (
        <>
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
                        <Button onClick={() => setContactFormIsVisible(true)}>
                            Schreib mir!
                        </Button>
                    </Paragraph>
                    {/* <Paragraph center>
                        <Button email="hallo@andimeier.ch">Schreib mir!</Button>
                    </Paragraph> */}
                </motion.div>
            </motion.div>

            <Modal
                isOpen={contactFormIsVisible}
                onClose={() => setContactFormIsVisible(false)}
            >
                <p>Hallo Modal!</p>
                <p>
                    <Button onClick={() => setContactFormIsVisible(false)}>
                        X
                    </Button>
                </p>
            </Modal>
        </>
    );
}
