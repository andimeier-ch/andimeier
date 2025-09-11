import Heading from '@/components/elements/heading/Heading';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import Accordion from '@/components/blocks/accordion/Accordion';
import { Job } from '@/data/de';
import AccordionItem from '@/components/blocks/accordion/AccordionItem';
import AngleDown from '@/components/icons/AngleDown';
import '@/components/elements/list/list.scss';

export default function JobAccordion({
    title,
    jobs,
}: {
    title: string;
    jobs: Job[];
}) {
    function generateJobId(job: Job) {
        return job.period.join('-').trim();
    }

    return (
        <>
            <Heading tag="h2" designLevel={2}>
                {title}
            </Heading>

            <Accordion className="accordion">
                {jobs.map((job) => {
                    const id = generateJobId(job);

                    const trigger = {
                        className: 'accordion__trigger',
                        markup: (
                            <>
                                <Heading
                                    tag="h3"
                                    designLevel={3}
                                    classNames={['accordion__maintitle']}
                                >
                                    {job.company}
                                </Heading>

                                <Paragraph classNames={['accordion__subtitle']}>
                                    {job.period.join('\u2009–\u2009')}
                                </Paragraph>
                            </>
                        ),
                    };

                    const icon = {
                        className: 'accordion__trigger-icon',
                        markup: <AngleDown />,
                    };

                    const content = {
                        className: 'accordion__content',
                        markup: (
                            <>
                                <Paragraph>
                                    <strong>
                                        als {job.jobTitle}{' '}
                                        {job.location === 'Remote'
                                            ? `(${job.location})`
                                            : `in ${job.location}`}
                                        :
                                    </strong>
                                </Paragraph>

                                <ul className="list">
                                    {job.tasks.map((task) => (
                                        <li key={task} className="list__item">
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ),
                    };

                    return (
                        <AccordionItem
                            key={id}
                            id={id}
                            className="accordion__item"
                            trigger={trigger}
                            content={content}
                            icon={icon}
                        />
                    );
                })}
            </Accordion>
        </>
    );
}
