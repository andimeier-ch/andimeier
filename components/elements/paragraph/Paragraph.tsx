import { ReactNode } from 'react';
import { printClasses } from '@/lib/helpers';
import './paragraph.scss';

export default function Paragraph({
    children,
    size,
}: {
    children: ReactNode;
    size?: 'large';
}) {
    const classNames = ['paragraph'];
    if (size === 'large') classNames.push('paragraph--large');

    return <p className={printClasses(classNames)}>{children}</p>;
}
