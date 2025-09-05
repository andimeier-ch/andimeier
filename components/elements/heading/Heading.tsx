import { printClasses } from '@/lib/helpers';
import { ComponentPropsWithoutRef, ElementType, JSX, ReactNode } from 'react';
import './heading.scss';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps<T extends HeadingTag> = {
    tag: T;
    designLevel: 1 | 2 | 3;
    classNames?: string[];
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Heading<T extends HeadingTag>({
    tag,
    designLevel,
    classNames = [],
    children,
    ...props
}: HeadingProps<T>) {
    const Tag = tag as ElementType;

    const classes = ['heading', `heading--h${designLevel}`, ...classNames];

    return (
        <Tag className={printClasses(classes)} {...props}>
            {children}
        </Tag>
    );
}
