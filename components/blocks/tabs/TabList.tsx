import { ReactNode } from 'react';

export default function TabList({ children }: { children: ReactNode }) {
    return <div className="tab-list">{children}</div>;
}
