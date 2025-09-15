import { ReactNode } from 'react';
import './button.scss';

export default function Button({
    url,
    children,
}: {
    url?: string;
    children: ReactNode;
}) {
    const classes = 'button';

    if (url) {
        return (
            <a className={`${classes} button--link`} href={url}>
                {children}
            </a>
        );
    }

    return <button className={`${classes} button--button`}>{children}</button>;
}
