import { ReactNode } from 'react';
import Section from '@/components/elements/section/Section';
import './hero.scss';

export default function Hero({ children }: { children: ReactNode }) {
    return (
        <Section size="wide" classNames={['hero']}>
            <p className="hero__title">{children}</p>
        </Section>
    );
}
