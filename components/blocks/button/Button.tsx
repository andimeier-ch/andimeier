import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.scss';
import ObfuscatedEmail from '@/components/elements/obfuscated-email/ObfuscatedEmail';

export default function Button({
    size = 'large',
    hierarchy = 'primary',
    url,
    email,
    type,
    onClick,
    children,
}: {
    size?: 'small' | 'large';
    hierarchy?: 'primary' | 'secondary';
    url?: string;
    email?: string;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: () => void;
    children: ReactNode;
}) {
    const classes = `button button--${size} button--${hierarchy}`;
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
        <button className={buttonClasses} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
