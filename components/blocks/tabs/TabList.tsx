import { ReactNode } from 'react';
import './tab-list.scss';

export default function TabList({ children }: { children: ReactNode }) {
    return <div className="tab-list">{children}</div>;
}
