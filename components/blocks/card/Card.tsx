import { AboutTopic } from '@/data/de';
import './card.scss';
import Heading from '@/components/elements/heading/Heading';

export default function Card({ icon, title, items }: AboutTopic) {
    return (
        <div className="card">
            <div className="card__heading">
                <span className="card__icon">{icon}</span>

                <Heading
                    tagLevel={3}
                    designLevel={2}
                    classNames={['card__title']}
                >
                    {title}
                </Heading>
            </div>

            <ul className="list">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
