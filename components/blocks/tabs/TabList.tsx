import { ReactNode } from 'react';
import './tab-list.scss';

export default function TabList({
    children,
    labelledBy,
}: {
    children: ReactNode;
    labelledBy: string;
}) {
    return (
        <div className="tab-list" role="tablist" aria-labelledby={labelledBy}>
            {children}
        </div>
    );
}
