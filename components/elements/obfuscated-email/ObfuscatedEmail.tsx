'use client';

import { ReactNode, useCallback, useState } from 'react';

function reverseString(string: string) {
    return string.split('').reverse().join('');
}

export default function ObfuscatedEmail({
    email,
    className,
    children,
}: {
    email: string;
    className?: string;
    children: ReactNode;
}) {
    const [href, setHref] = useState<string>('#');

    const reveal = useCallback(() => {
        if (href === '#') {
            setHref(`mailto:${email}`);
        }
    }, [email, href]);

    return (
        <a
            href={href}
            onFocus={reveal}
            onMouseDown={reveal}
            onTouchStart={reveal}
            className={className}
        >
            {children}
        </a>
    );
}
