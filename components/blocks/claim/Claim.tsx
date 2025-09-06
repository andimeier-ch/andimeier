import Section from '@/components/elements/section/Section';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import { ReactNode } from 'react';

export default function Claim({ children }: { children: ReactNode }) {
    return (
        <Section size="narrow" classNames={['claim']}>
            <Paragraph size="large">{children}</Paragraph>
        </Section>
    );
}
