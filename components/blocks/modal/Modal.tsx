'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { viewportChildVariants } from '@/lib/motion';
import './modal.scss';

export default function Modal({
    isOpen = false,
    onClose,
    children,
}: {
    isOpen?: boolean;
    onClose: () => void;
    children: ReactNode;
}) {
    const dialog = useRef<HTMLDialogElement>(null);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!dialog.current) return;

        if (isOpen) {
            dialog.current.showModal();
        }

        return () => {
            dialog.current?.close();
        };
    }, [isOpen, isMounted]);

    if (!isMounted) return null;

    const modalsContainer = document.getElementById('modals');
    if (!modalsContainer) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.dialog
                        className="modal"
                        ref={dialog}
                        onClose={onClose}
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                    >
                        {children}
                    </motion.dialog>
                </>
            )}
        </AnimatePresence>,
        document.getElementById('modals') as HTMLElement
    );
}
