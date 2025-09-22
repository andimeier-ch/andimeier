'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
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
    const dialog = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // close modal with esc-key
    useEffect(() => {
        if (!isOpen) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

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
                        onClick={onClose}
                    />

                    <motion.div
                        className="modal"
                        ref={dialog}
                        role="dialog"
                        aria-modal="true"
                        initial={{ scale: 0.8, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 30 }}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.getElementById('modals') as HTMLElement
    );
}
