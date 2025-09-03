'use client';

import { useTabsContext } from './Tabs';

export default function Tab({
    id,
    title,
    subtitle,
}: {
    id: string;
    title: string;
    subtitle: string;
}) {
    const { handleTabChange } = useTabsContext();

    function handleTabClick() {
        handleTabChange(id);
    }

    return (
        <button className="tab" onClick={handleTabClick}>
            <span>{title}</span>
            <span>{subtitle}</span>
        </button>
    );
}
