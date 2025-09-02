import Card from './Card';
import { AboutTopic } from '@/data/de';
import './card-list.scss';

export default function CardList({ items }: { items: AboutTopic[] }) {
    return (
        <div className="card-list">
            {items.map((topic) => (
                <div key={topic.title} className="card-list__item">
                    <Card
                        title={topic.title}
                        icon={topic.icon}
                        items={topic.items}
                    />
                </div>
            ))}
        </div>
    );
}
