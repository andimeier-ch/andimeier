import { printClasses } from '@/lib/helpers';
import { ReactNode } from 'react';
import './section.scss';

export default function Section({
    children,
    size,
    classNames = [],
}: {
    children: ReactNode;
    size: 'wide' | 'narrow';
    classNames?: string[];
}) {
    let classes = ['section', `section--${size}`, ...classNames];

    return <section className={printClasses(classes)}>{children}</section>;
}
