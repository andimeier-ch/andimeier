import Section from '@/components/elements/section/Section';
import Hero from '@/components/blocks/hero/Hero';
import Claim from '@/components/blocks/claim/Claim';
import { getDictionary } from '@/lib/i18n';
import CardList from '@/components/blocks/card/CardList';
import Heading from '@/components/elements/headings/Heading';

export default function Home() {
    const { header, about } = getDictionary('de');

    return (
        <>
            <header>
                <Hero>{header.title}</Hero>
                <Claim>{header.claim}</Claim>
            </header>

            <main>
                <Section size="wide">
                    <Heading
                        tagLevel={2}
                        designLevel={2}
                        classNames={['visually-hidden']}
                    >
                        Über mich
                    </Heading>
                    <CardList items={about.topics} />
                </Section>
            </main>
        </>
    );
}
