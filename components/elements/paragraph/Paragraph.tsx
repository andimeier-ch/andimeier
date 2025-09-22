import { ReactNode } from 'react';
import { printClasses } from '@/lib/helpers';
import './paragraph.scss';

export default function Paragraph({
    children,
    size,
    center,
    classNames = [],
}: {
    children: ReactNode;
    size?: 'small' | 'large';
    center?: boolean;
    classNames?: string[];
}) {
    const cssClasses = ['paragraph', ...classNames];
    if (size) cssClasses.push(`paragraph--${size}`);
    if (center) cssClasses.push('paragraph--center');

    return <p className={printClasses(cssClasses)}>{children}</p>;
}
