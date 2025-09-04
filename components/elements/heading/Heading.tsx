import { printClasses } from '@/lib/helpers';
import { JSX, ReactNode } from 'react';
import './heading.scss';

export default function Heading({
    tagLevel,
    designLevel,
    classNames = [],
    children,
}: {
    tagLevel: 1 | 2 | 3 | 4 | 5 | 6;
    designLevel: 1 | 2 | 3;
    classNames?: string[];
    children: ReactNode;
}) {
    const Tag = `h${tagLevel}` as keyof JSX.IntrinsicElements;
    const classes = ['heading', `heading--h${designLevel}`, ...classNames];

    return <Tag className={printClasses(classes)}>{children}</Tag>;
}
