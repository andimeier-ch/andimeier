import Heading from '@/components/elements/heading/Heading';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import Tabs from '@/components/blocks/tabs/Tabs';
import TabList from '@/components/blocks/tabs/TabList';
import Tab from '@/components/blocks/tabs/Tab';
import TabPanel from '@/components/blocks/tabs/TabPanel';
import { Job } from '@/data/de';
import './job-tabs.scss';
import '@/components/elements/list/list.scss';

export default function JobTabs({ jobs }: { jobs: Job[] }) {
    function generateJobId(job: Job) {
        return job.period.join('-').trim();
    }

    return (
        <Tabs defaultTabId={generateJobId(jobs[0])}>
            <TabList>
                {jobs.map((job) => {
                    const id = generateJobId(job);

                    return (
                        <Tab key={id} id={id} classNames={['job-tabs__tab']}>
                            <Heading
                                tagLevel={3}
                                designLevel={3}
                                classNames={['job-tabs__tab-title']}
                            >
                                {job.company}
                            </Heading>

                            <Paragraph classNames={['job-tabs__tab-subtitle']}>
                                {job.period.join('\u2009–\u2009')}
                            </Paragraph>
                        </Tab>
                    );
                })}
            </TabList>

            {jobs.map((job, index) => {
                const id = generateJobId(job);

                const position =
                    index === 0
                        ? 'first'
                        : index === jobs.length - 1
                        ? 'last'
                        : 'mid';

                return (
                    <TabPanel
                        key={id}
                        id={id}
                        classNames={[
                            'job-tabs__tab-panel',
                            `job-tabs__tab-panel--is-${position}`,
                        ]}
                    >
                        <p className="job-tabs__tab-panel-title">
                            als {job.jobTitle}{' '}
                            {job.location === 'Remote'
                                ? `(${job.location})`
                                : `in ${job.location}`}
                            :
                        </p>

                        <ul className="list">
                            {job.tasks.map((task) => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>
                    </TabPanel>
                );
            })}
        </Tabs>
    );
}
