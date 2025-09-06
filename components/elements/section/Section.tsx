import { printClasses } from '@/lib/helpers';
import { ReactNode } from 'react';
import { Margin } from '@/lib/spacingTypes';
import './section.scss';

function generateMarginClass(spacing: number) {
    return spacing.toString().replace('.', '-');
}

export default function Section({
    children,
    size,
    classNames = [],
    marginTop,
    marginBottom,
}: {
    children: ReactNode;
    size: 'wide' | 'narrow';
    classNames?: string[];
    marginTop?: Margin;
    marginBottom?: Margin;
}) {
    const classes = ['section', `section--${size}`, ...classNames];

    if (marginTop) {
        classes.push(`section--margin-top-${generateMarginClass(marginTop)}`);
    }

    if (marginBottom) {
        classes.push(
            `section--margin-bottom-${generateMarginClass(marginBottom)}`
        );
    }

    return <section className={printClasses(classes)}>{children}</section>;
}
