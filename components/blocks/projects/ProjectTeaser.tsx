import { motion } from 'motion/react';
import { viewportChildVariants } from '@/lib/motion';
import Heading from '@/components/elements/heading/Heading';
import Paragraph from '@/components/elements/paragraph/Paragraph';
import Image, { StaticImageData } from 'next/image';
import './project-teaser.scss';
import Link from '@/components/elements/link/Link';

export default function ProjectTeaser({
    image,
    title,
    subtitle,
    linkTitle,
    linkURL,
}: {
    image: StaticImageData;
    title: string;
    subtitle: string;
    linkTitle?: string;
    linkURL?: string;
}) {
    return (
        <motion.article
            className="project-teaser"
            variants={viewportChildVariants}
            viewport={{ amount: 'all' }}
        >
            <div className="project-teaser__image">
                {image && <Image src={image} alt="Project screenshot" />}
            </div>

            <div className="project-teaser__text">
                <Heading
                    tag="h3"
                    designLevel={3}
                    classNames={['project-teaser__title']}
                >
                    {title}
                </Heading>

                <Paragraph classNames={['project-teaser__subtitle']}>
                    {subtitle}
                </Paragraph>

                <Paragraph size="small" classNames={['project-teaser__link']}>
                    <Link href={linkURL} target="_blank">
                        {linkTitle}
                    </Link>
                </Paragraph>
            </div>
        </motion.article>
    );
}
