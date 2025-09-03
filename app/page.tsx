import { getDictionary } from '@/lib/i18n';
import Section from '@/components/elements/section/Section';
import Heading from '@/components/elements/headings/Heading';
import Hero from '@/components/blocks/hero/Hero';
import Claim from '@/components/blocks/claim/Claim';
import CardList from '@/components/blocks/card/CardList';
import Tabs from '@/components/blocks/tabs/Tabs';
import TabList from '@/components/blocks/tabs/TabList';
import Tab from '@/components/blocks/tabs/Tab';
import TabPanel from '@/components/blocks/tabs/TabPanel';
import { Job } from '@/data/de';

export default function Home() {
    const { header, about, experience } = getDictionary('de');

    function generateJobId(job: Job) {
        return job.period.join('-').trim();
    }

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

                    <Tabs defaultTabId={generateJobId(experience.jobs[0])}>
                        <TabList>
                            {experience.jobs.map((job) => {
                                const id = generateJobId(job);

                                return (
                                    <Tab
                                        key={id}
                                        id={id}
                                        title={job.company}
                                        subtitle={job.period.join(' – ')}
                                    />
                                );
                            })}
                        </TabList>

                        {experience.jobs.map((job) => {
                            const id = generateJobId(job);

                            return (
                                <TabPanel key={id} id={id}>
                                    <p>
                                        als {job.jobTitle}{' '}
                                        {job.location === 'Remote'
                                            ? `(${job.location})`
                                            : `in ${job.location}`}
                                        :
                                    </p>

                                    <ul>
                                        {job.tasks.map((task) => (
                                            <li key={task}>{task}</li>
                                        ))}
                                    </ul>
                                </TabPanel>
                            );
                        })}
                    </Tabs>
                </Section>
            </main>
        </>
    );
}
