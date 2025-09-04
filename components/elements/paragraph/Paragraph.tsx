import { ReactNode } from 'react';
import { printClasses } from '@/lib/helpers';
import './paragraph.scss';

export default function Paragraph({
    children,
    size,
    classNames = [],
}: {
    children: ReactNode;
    size?: 'large';
    classNames?: string[];
}) {
    const cssClasses = ['paragraph', ...classNames];
    if (size === 'large') cssClasses.push('paragraph--large');

    return <p className={printClasses(cssClasses)}>{children}</p>;
}
