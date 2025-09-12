import { AnchorHTMLAttributes, ReactNode } from 'react';
import './link.scss';

type LinkProps = {
    children: ReactNode;
    className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ children, className, ...props }: LinkProps) {
    console.log(props);
    const classes = ['link', className].join(' ').trim();

    return (
        <a className={classes} {...props}>
            {children}
        </a>
    );
}
