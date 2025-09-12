import { ReactNode } from 'react';
import { printClasses } from '@/lib/helpers';
import './paragraph.scss';

export default function Paragraph({
    children,
    size,
    classNames = [],
}: {
    children: ReactNode;
    size?: 'small' | 'large';
    classNames?: string[];
}) {
    const cssClasses = ['paragraph', ...classNames];
    if (size) cssClasses.push(`paragraph--${size}`);

    return <p className={printClasses(cssClasses)}>{children}</p>;
}
