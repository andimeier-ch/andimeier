import { ReactNode } from 'react';
import './button.scss';
import ObfuscatedEmail from '@/components/elements/obfuscated-email/ObfuscatedEmail';

export default function Button({
    url,
    email,
    onClick,
    children,
}: {
    url?: string;
    email?: string;
    onClick?: () => void;
    children: ReactNode;
}) {
    const classes = 'button';
    const linkClasses = `${classes} button--link`;
    const buttonClasses = `${classes} button--button`;

    if (url) {
        return (
            <a className={linkClasses} href={url}>
                {children}
            </a>
        );
    }

    if (email) {
        return (
            <ObfuscatedEmail email={email} className={linkClasses}>
                {children}
            </ObfuscatedEmail>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
}
