'use client';

import { createContext, ReactNode, use, useState } from 'react';
import './accordion.scss';

type AccordionContextObject = {
    openItemID?: string;
    toggleItem: (id: string) => void;
};

const AccordionContext = createContext<AccordionContextObject>({
    openItemID: '',
    toggleItem: () => {},
});

export function useAccordionContext() {
    const context = use(AccordionContext);

    if (!context) {
        throw new Error(
            'Accordion related components must be wrapped with <Accordion>.'
        );
    }

    return context;
}

export default function Accordion({
    className,
    children,
}: {
    className: string;
    children: ReactNode;
}) {
    const [openItemID, setOpenItemID] = useState<string>();

    function toggleItem(id: string) {
        setOpenItemID((prevID) => {
            if (prevID === id) {
                return undefined;
            }

            return id;
        });
    }

    const contextValue = {
        openItemID,
        toggleItem,
    };

    return (
        <AccordionContext value={contextValue}>
            <div className={className}>{children}</div>
        </AccordionContext>
    );
}
