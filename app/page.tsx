import { getDictionary } from '@/lib/i18n';
import Section from '@/components/elements/section/Section';
import Heading from '@/components/elements/heading/Heading';
import Hero from '@/components/blocks/hero/Hero';
import Claim from '@/components/blocks/claim/Claim';
import CardList from '@/components/blocks/card/CardList';
import JobTabs from '@/components/features/job-tabs/JobTabs';

export default function Home() {
    const { header, about, experience } = getDictionary('de');

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

                <Section size="narrow">
                    <Heading tagLevel={2} designLevel={2}>
                        {experience.title}
                    </Heading>

                    <JobTabs jobs={experience.jobs} />
                </Section>
            </main>
        </>
    );
}
