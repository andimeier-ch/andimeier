import { getDictionary } from '@/lib/i18n';
import Section from '@/components/elements/section/Section';
import Heading from '@/components/elements/heading/Heading';
import Hero from '@/components/blocks/hero/Hero';
import Claim from '@/components/blocks/claim/Claim';
import CardList from '@/components/blocks/card/CardList';
import JobAccordion from '@/components/features/job-accordion/JobAccordion';
import Projects from '@/components/features/projects/Projects';
import CallToAction from '@/components/features/call-to-action/CallToAction';
import './page.scss';

export default function Home() {
    const { header, about, experience, largeProjects, privateProjects } =
        getDictionary('de');

    return (
        <>
            <header>
                <Hero>{header.title}</Hero>
                <Claim>{header.claim}</Claim>
            </header>

            <main className="main-content">
                <Section size="wide" marginTop={16} marginBottom={16}>
                    <Heading
                        tag="h2"
                        designLevel={2}
                        classNames={['visually-hidden']}
                    >
                        Über mich
                    </Heading>

                    <CardList items={about.topics} />
                </Section>

                <Section size="narrow">
                    <CallToAction />
                </Section>

                <Section size="narrow" marginTop={16} marginBottom={16}>
                    <JobAccordion
                        title={experience.title}
                        jobs={experience.jobs}
                    />
                </Section>

                <Section size="narrow" marginTop={16} marginBottom={8}>
                    <Projects
                        title={largeProjects.title}
                        lead={largeProjects.lead}
                        projects={largeProjects.items}
                    />
                </Section>

                <Section size="narrow" marginTop={8} marginBottom={16}>
                    <Projects
                        title={privateProjects.title}
                        lead={privateProjects.lead}
                        projects={privateProjects.items}
                    />
                </Section>
            </main>
        </>
    );
}
